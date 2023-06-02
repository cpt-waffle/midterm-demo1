const db = require('../connection');


const getSingleUser = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]).then(data => {
    return data.rows[0];
  })
}

module.exports = { getSingleUser };