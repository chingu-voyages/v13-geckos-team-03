module.exports = (req, res) => {
  res.status(400).json({ errors: ["bad request"] });
};
