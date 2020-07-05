import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf((info) => `[${info.timestamp}] - [${info.level}]: ${info.message}`),
  ),
  transports: [
    new transports.File({
      filename: './logs/debug.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ],
});

export const sqlLogger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf((info) => `[${info.timestamp}] - [${info.level}]: ${info.message}`),
  ),
  transports: [
    new transports.File({
      filename: './logs/sql.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

export default logger;
