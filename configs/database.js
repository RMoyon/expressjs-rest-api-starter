import { Sequelize } from 'sequelize';
import { sqlLogger } from './logger';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: (log) => sqlLogger.info(log),
  },
);

// This is not the optimal way to synchronize your database, migrations files are far better
sequelize.sync();

export default sequelize;
