import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString = "postgresql://authdb_eyrd_user:rotdMPnCGVDSxsRE3wNGQZXR5bwzjoKb@dpg-ct88udhopnds73buob8g-a.oregon-postgres.render.com/authdb_eyrd"

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
