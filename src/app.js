import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.log("erro de conexao", erro);
})

conexao.once("open", () => {
    console.log("conexao com o banco bem sucedida");
})

const app = express();
routes(app)

export default app;