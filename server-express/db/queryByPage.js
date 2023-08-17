module.exports = (sql, tableName, page = 1, size = 10, callback) => {
  const start = (page - 1) * size;
  const SQL = `SELECT * FROM ${tableName} ORDER BY user_id DESC LIMIT ${start}, ${size}`;
  sql.query(SQL, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    const COUNT_SQL = `SELECT count(*) as count FROM ${tableName}`;
    sql.query(COUNT_SQL, (err, count) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, {
        page,
        size,
        total: count[0]?.count,
        data: result,
      });
    });
  });
};
