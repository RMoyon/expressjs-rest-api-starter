/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import router from './routes';
import sequelize from './configs/database';
import httpLogger from './configs/httpLogger';
import logger from './configs/logger';

const server = express();

// Adding middleware
server.use(helmet());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(httpLogger);

// Link the router
server.use('/', router);
server.use((req, res) => {
  logger.warn(`Unknow route ${req.method} ${req.originalUrl}`);
  return res.status(404).json({ success: false, message: 'Resource not found.' });
});

server.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connection to database has been established successfully!');
  } catch (error) {
    logger.error(`Unable to connect to the database: ${error}`);
  }

  if (process.env.NODE_ENV === 'development') {
    logger.info(`Launching on http://localhost:${process.env.PORT}`);
  }
});
