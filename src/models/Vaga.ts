import { DataTypes, Model } from 'sequelize';
import sequelize from '../data.base';

export class Vaga extends Model {}

Vaga.init(
  {
    titulo: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: false },
    preco: { type: DataTypes.FLOAT, allowNull: false },
    ocupada: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    camas: { type: DataTypes.INTEGER, allowNull: false },
    ventilador: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    refeicaoInclusa: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  },
  { sequelize, modelName: 'vaga' }
);
