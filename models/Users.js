import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';
import Messages from './Messages';

class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
  },
}, {
  sequelize,
});

Users.hasMany(Messages);

export default Users;
