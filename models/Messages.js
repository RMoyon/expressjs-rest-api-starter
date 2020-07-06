import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';

class Messages extends Model {}

Messages.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'messages',
  tableName: 'messages',
});

// Create table if not already created
// It will update the table in a safe way
Messages.sync();

export default Messages;
