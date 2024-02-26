import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nacionalidade: {type: String},
}, { versionKey: false });

// autores se refere a colecao
const autor = mongoose.model("autores", authorSchema);

export {autor, authorSchema};