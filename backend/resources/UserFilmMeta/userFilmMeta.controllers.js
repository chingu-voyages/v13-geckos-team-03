const createOne = (req, res) => {
  res.json({"POST request": req.body})
}

const getOne = (req, res) => {
  res.json({"GET request": req.body})
}

const updateOne = (req, res) => {
  res.json({"PUT request": req.body})
}

const deleteOne = (req, res) => {
  res.json({"DELETE request": req.body})
}

module.exports = {
  createOne,
  getOne,
  updateOne,
  deleteOne
}