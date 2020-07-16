import utils from '../utils';
import Messages from '../models/Messages';

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Messages.findOne({
      where: {
        id,
      },
    });

    if (!message) {
      return utils.defaultError(res, null, 400, `Unknow message with id: ${id}`);
    }

    return res.status(200).json(message);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const getAll = async (req, res) => {
  try {
    const messages = await Messages.findAll();
    return res.status(200).json(messages);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const getByUser = async (req, res) => {
  try {
    const { UserId } = req.params;
    const messages = await Messages.findAll({
      where: {
        UserId,
      },
    });

    return res.status(200).json(messages);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const createByUser = async (req, res) => {
  try {
    const { body } = req;
    const { UserId } = req.params;
    const newMessage = await Messages.create({
      ...body,
      UserId,
    });

    return res.status(201).json(newMessage);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Messages.findOne(
      {
        where: {
          id,
        },
      },
    );

    if (!message) {
      return utils.defaultError(res, null, 400, `Unknow message with id: ${id}`);
    }

    const result = await Messages.update(
      req.body,
      {
        where: {
          id,
        },
      },
    );

    if (!result[0]) {
      throw new Error(`Error while updating message with id: ${id}`);
    }

    await message.reload();

    return res.status(200).json(message);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Messages.findByPk(id);

    if (!message) {
      return utils.defaultError(res, null, 400, `Unknow message with id: ${id}`);
    }

    await message.destroy();

    return res.status(200).json(message);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

const removeByUser = async (req, res) => {
  try {
    const { UserId } = req.params;
    const messages = await Messages.findAll({
      where: {
        UserId,
      },
    });

    if (!messages) {
      return utils.defaultError(res, null, 400, `No messages for user: ${UserId}`);
    }

    const response = await Messages.destroy({
      where: {
        UserId,
      },
    });

    if (!response) {
      return utils.defaultError(res, null, 500, `Error while deleting messages for user: ${UserId}`);
    }

    return res.status(200).json(messages);
  } catch (error) {
    return utils.defaultError(res, error);
  }
};

export default {
  getOne,
  getAll,
  getByUser,
  createByUser,
  update,
  remove,
  removeByUser,
};
