import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const databaseVersion = await database.query("SHOW server_version;");
  const pgVersion = databaseVersion.rows[0].server_version;

  const resultMaxConnections = await database.query("SHOW max_connections;");
  const maxConnections = resultMaxConnections.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const resultActiveConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;",
    values: [databaseName],
  });
  const activeConnections = resultActiveConnections.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database_version: pgVersion,
      max_connections: parseInt(maxConnections),
      active_connections: activeConnections,
    },
  });
}

export default status;
