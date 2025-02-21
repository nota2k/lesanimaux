import path from "path";

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    sqlite: {
      client: "sqlite",
      connection: {
        filename: path.resolve(env("DATABASE_FILENAME", ".tmp/data.db")),
      },
      useNullAsDefault: true,
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
    // ...other database configurations...
  };

  return {
    connection: {
      client,
      ...connections[client],
    },
  };
};
