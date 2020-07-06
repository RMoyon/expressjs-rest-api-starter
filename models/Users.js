import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';
import Messages from './Messages';

class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.INTEGER,
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
  modelName: 'users',
});

Users.hasMany(Messages);

// Create table if not already created
Users.sync();

export default Users;
