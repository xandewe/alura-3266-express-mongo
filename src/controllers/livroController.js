import livro from "../models/livro.js";
import { autor } from "../models/autor.js";

class LivroController {
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({}).populate("autores").exec();
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listarLivrosPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`});
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado "});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização`});
        }
    };

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro deletado com sucesso "});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na deleção`});
        }
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "criado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar livro`});
        }
    };

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;

        try {
            const livrosPorEditora = await livro.find( {editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({message: `${error.message} - falha na busca`});
        }
    }
};

export default LivroController;