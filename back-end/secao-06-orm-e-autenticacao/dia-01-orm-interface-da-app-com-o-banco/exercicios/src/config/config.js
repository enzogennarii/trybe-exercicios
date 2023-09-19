const config = {
  username: 'root',
  password: 'senha_mysql',
  database: 'sequelize_exercises',
  port: 3306,
  host: 'localhost',
  dialect: 'mysql',
}

module.exports = {
  development: config,
  test: config,
  production: config,
};
