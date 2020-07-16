import logger from '../configs/logger';

const defaultError = (res, error = null, code = 500, message = '') => {
  const displayMessage = message || 'Oops, something went wrong! \'.\'';
  if (error) {
    logger.error(error);
  } else {
    logger.warn(displayMessage);
  }

  // For the development env, we want to know what happened
  if (process.env.NODE_ENV === 'development') {
    return res.status(code).json({
      error: error || displayMessage,
    });
  }

  return res.status(code).json({
    error: displayMessage,
  });
};

export default defaultError;
