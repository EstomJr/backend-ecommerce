const mongoose = require('mongoose');


const LookSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        trim: true
    },
    tamanho: {
        type: String
    },
    preco: {
        type: Number,
        trim: true
    },
    imagem: {
        type: String

    }

})

module.exports = mongoose.model('Look', LookSchema);