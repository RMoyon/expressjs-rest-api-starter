import logger from '../configs/logger';

const error500 = (res, error) => {
  logger.error(error);

  // For the development env, we want to know what happened
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    error: 'Something went wrong, please try again',
  });
};

export default {
  error500,
};
