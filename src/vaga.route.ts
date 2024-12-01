import express from 'express';
import { Vaga } from './models/Vaga';

const router = express.Router();

router.get('/', async (req, res) => {
  const vagas = await Vaga.findAll();
  res.json(vagas);
});

router.post('/', async (req, res) => {
  const vaga = await Vaga.create(req.body);
  res.status(201).json(vaga);
});

router.put('/:id', async (req, res) => {
  const vaga = await Vaga.findByPk(req.params.id);
  if (!vaga) return res.status(404).json({ error: 'Vaga não encontrada' });

  await vaga.update(req.body);
  res.json(vaga);
});

router.delete('/:id', async (req, res) => {
  const vaga = await Vaga.findByPk(req.params.id);
  if (!vaga) return res.status(404).json({ error: 'Vaga não encontrada' });

  await vaga.destroy();
  res.status(204).end();
});

export default router;
