import path from "path";

export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    sqlite: {
      client: "sqlite",
      connection: {
        filename: path.resolve(env("DATABASE_FILENAME", ".tmp/data.db")),
      },
      useNullAsDefault: true,
    },
    postgres: {
      client: "pg",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "password"),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client], // Maintenant, il prendra bien la config correspondante
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
