import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Usuario } from './models/usuario.model';
import authMiddleware from './middlewares/authMiddleware';

const usuarioRoute = Router();
const SECRET = "seu_segredo_jwt";

usuarioRoute.post(
  '/',
  [
    body('nome').notEmpty().withMessage('Nome é obrigatório.'),
    body('email').isEmail().withMessage('E-mail inválido.'),
    body('senha').isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres.')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nome, email, senha } = req.body;

    try {
      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(400).json({ message: 'E-mail já cadastrado.' });
      }

      const senhaHash = await bcrypt.hash(senha, 10);
      const usuario = await Usuario.create({ nome, email, senha: senhaHash });

      res.status(201).json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao cadastrar usuário.', error });
    }
  }
);

usuarioRoute.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: 'Senha inválida.' });
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro no login.', error });
  }
});

usuarioRoute.get('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuário.', error });
  }
});

usuarioRoute.put('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    usuario.nome = nome || usuario.nome;
    usuario.email = email || usuario.email;

    await usuario.save();
    res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar usuário.', error });
  }
});

usuarioRoute.delete('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    await usuario.destroy();
    res.json({ message: 'Usuário removido com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover usuário.', error });
  }
});

export default usuarioRoute;
