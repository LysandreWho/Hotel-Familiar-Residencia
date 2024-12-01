import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './data.base';
import vagaRoute from './vaga.route';
import { Vaga } from './models/Vaga';
import { Usuario } from './models/Usuario';
import usuarioRoute from './usuario.route';

app.use('/usuarios', usuarioRoute);


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/vagas', vagaRoute);

sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado!');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
