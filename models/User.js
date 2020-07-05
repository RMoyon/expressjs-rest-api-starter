import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';

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
  modelName: 'Users',
  tableName: 'Users',
});

// Create table if not already created
Users.sync();

export default Users;
