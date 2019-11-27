const UserFilmMeta = require("./userFilmMeta.model");

const createOne = async (req, res, next) => {
  const userId = req.user._id;
  const { filmId } = req.body;
  if (!filmId) {
    res.status(400).json({
      errors: ["must provide filmId"]
    });
    return;
  }
  try {
    const doc = await UserFilmMeta.create({
      userId: userId,
      filmId
    });
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getMany = async (req, res, next) => {
  const _id = req.user._id;
  try {
    const docs = await UserFilmMeta.find({
      userId: _id
    });
    res.status(200).json({ docs });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateOne = (req, res) => {
  res.json({ "PUT request": req.body });
};

const deleteOne = async (req, res, next) => {
  const { film_id } = req.body;
  if (!film_id) {
    res.status(400).json({
      errors: ["must provide film_id"]
    });
    return;
  }
  try {
    const doc = await UserFilmMeta.deleteOne({
      _id: film_id
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json({
      errors: [err]
    });
    return;
  }
};

module.exports = {
  createOne,
  getMany,
  updateOne,
  deleteOne
};
