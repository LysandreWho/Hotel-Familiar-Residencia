import { DataTypes, Model } from 'sequelize';
import sequelize from '../data.base';

export class Usuario extends Model {}

Usuario.init(
  {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: 'usuario' }
);
