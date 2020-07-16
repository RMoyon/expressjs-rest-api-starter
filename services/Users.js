import utils from '../utils';
import Users from '../models/Users';

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);

    if (user) {
      return res.status(200).json(user);
    }

    return res.status(204).send();
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const create = async (req, res) => {
  try {
    const { body } = req;
    const newUser = await Users.create(body);

    return res.status(201).json(newUser);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);

    if (!user) {
      return utils.defaultError(res, null, 400, `Unknow user with id: ${id}`);
    }

    const result = await Users.update(
      req.body,
      {
        where: {
          id,
        },
      },
    );

    if (!result[0]) {
      throw new Error(`Error while updating user with id: ${id}`);
    }

    await user.reload();

    return res.status(200).json(user);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);

    if (!user) {
      return utils.defaultError(res, null, 400, `Unknow user with id: ${id}`);
    }

    await user.destroy();

    return res.status(200).json(user);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

export default {
  getUsers,
  getUser,
  create,
  update,
  remove,
};
