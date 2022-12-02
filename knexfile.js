// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "0.0.0.0",
      user: "postgres",
      password: "password",
      database: "norrlandsordern",
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
