import errors from '../errors';
import Users from '../models/Users';

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
    const user = await Users.findByPk(req.params.id);

    if (user) {
      return res.status(200).json(user);
    }

    return res.status(204).send();
  } catch (error) {
    return errors.error500(res, error);
  }
};

const create = async (req, res) => {
  try {
    const newUser = await Users.create({
      username: req.body.username,
      birthday: req.body.birthday,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return errors.error500(res, error);
  }
}

const update = async (req, res) => {
  try {
    const user = await Users.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      },
    );

    return res.status(200).json(user);
  } catch (error) {
    return errors.error500(res, error);
  }
}

export default {
  getUsers,
  getUser,
  create,
  update,
};
