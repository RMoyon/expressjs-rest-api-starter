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
}, {
  sequelize,
});

export default Messages;
