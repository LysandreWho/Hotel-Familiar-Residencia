import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './data.base';
import vagaRoute from './vaga.route';
import { Vaga } from './models/Vaga';
import { Usuario } from './models/Usuario';

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
