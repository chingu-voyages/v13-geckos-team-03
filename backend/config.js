let config;

switch(process.env.MODE) {
  case "development":
    config = {
      DB_URL: process.env.DEV_DB_URL
    }
    break;
  case "test":
    config = {
      DB_URL: process.env.TEST_DB_URL
    }
    break;
  default:
    config = {}
}

module.exports = config;