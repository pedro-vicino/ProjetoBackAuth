import pool from "../database/database";

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(500) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

const createBooksTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
       CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        subtitle VARCHAR(200) NOT NULL,
        image VARCHAR(500) NOT NULL,
        price DECIMAL(20, 3) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "Books" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};


const alterTableUser = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
        ALTER TABLE users
        ADD password VARCHAR(500) NOT NULL;
    `;
    await client.query(queryText);
    console.log('Tabela "users" atualizada com successo!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

const start = async () => {
  await createUsersTable();
  await alterTableUser();
  await createBooksTable();
};

start().then(() => process.exit(0));

// DROP TABLE transactions;
// DROp TABLE products;
// DROp TABLE users;
