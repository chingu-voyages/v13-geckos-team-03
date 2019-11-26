const bcrypt = require("bcrypt");

module.exports = async password => {
  const hash = await bcrypt.hash(password, 8);
  return hash;
};
