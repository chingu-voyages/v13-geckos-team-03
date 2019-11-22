const createUser = (req, res) => {
  res.json({"POST request": req.body})
}

const getUser = (req, res) => {
  res.json({"GET request": req.body})
}

const updateUser = (req, res) => {
  res.json({"PUT request": req.body})
}

const deleteUser = (req, res) => {
  res.json({"DELETE request": req.body})
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser
}