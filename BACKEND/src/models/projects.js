const connection = require('../db-config');

const findMany = () => {
  return connection.promise().query('SELECT * FROM projects');
};

module.exports = {
    findMany,
    // findOne,
    // create,
    // deleteTrack,
  };