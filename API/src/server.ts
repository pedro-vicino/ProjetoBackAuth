import express from "express";
import booksRoutes from "./routes/booksRoutes";
import authRouter from "./routes/authRoutes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors())

app.use(bodyParser.json());

app.get(
    "/status",
    (req, res) => res.json({ status: "OK" })
);

app.use(booksRoutes);
app.use(authRouter);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// "start": "npx ts-node src/migrations/migration.ts && npx ts-node src/server.ts"
