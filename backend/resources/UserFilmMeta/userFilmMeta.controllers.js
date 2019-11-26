const createOne = (req, res) => {
  res.json({ "POST request": req.body });
};

const getMany = (req, res) => {
  console.log(req.body.userId);
  res.json({ "GET many meta": req.body });
};

const updateOne = (req, res) => {
  res.json({ "PUT request": req.body });
};

const deleteOne = (req, res) => {
  res.json({ "DELETE request": req.body });
};

module.exports = {
  createOne,
  getMany,
  updateOne,
  deleteOne
};
