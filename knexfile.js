// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/g90students'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
