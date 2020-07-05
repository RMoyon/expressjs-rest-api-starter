import errors from '../errors';
import Users from '../models/User';

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return errors.error500(res, error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.param.id);

    if (user) {
      return res.status(200).json(user);
    }

    return res.status(204).send();
  } catch (error) {
    return errors.error500(res, error);
  }
};

export default {
  getUsers,
  getUser,
};
