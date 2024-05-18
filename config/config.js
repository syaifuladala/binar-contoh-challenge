require('dotenv').config()
module.exports = {
  "development": {
    "username": "postgres",
    "password": "SuperAdmin",
    "database": "binar_platinum",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": "postgres",
    "password": "SuperAdmin",
    "database": "binar_platinum_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    logging: false,
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
