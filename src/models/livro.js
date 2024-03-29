import mongoose from "mongoose";
import { authorSchema } from "./autor.js"

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: mongoose.Schema.Types.String, required: true},
    editora: {type: String},
    preco: {type: mongoose.Schema.Types.Number},
    paginas: {type: mongoose.Schema.Types.Number},
    autor: authorSchema
}, { versionKey: false });

// livros se refere a colecao
const livro = mongoose.model("livros", livroSchema);

export default livro;