import errors from '../errors';
import Messages from '../models/Messages';

const getUserMessages = async (req, res) => {
  try {
    const messages = await Messages.findAll({
      where: {
        userId: req.params.id,
      },
    });

    return res.status(200).json(messages);
  } catch (error) {
    return errors.error500(res, error);
  }
};

export default {
  getUserMessages,
};
