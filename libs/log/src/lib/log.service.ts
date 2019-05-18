import { createLogger, transports, format } from 'winston';

const initializeLogger = () => {
  return createLogger({
    format: format.combine(format.splat(), format.simple()),
    transports: [
      new transports.Console({
        format: format.simple(),
        level: process.env.NODE_ENV === 'production' ? 'error' : 'info'
      }),
      new transports.File({ filename: 'app.log', level: 'info' })
    ]
  });
};

const logger = initializeLogger();

const getLogger = () => {
  logger.warn('logger configured.');
  return logger;
};

export { getLogger };
