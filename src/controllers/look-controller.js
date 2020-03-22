const mongoose = require('mongoose');
const Look = require('../models/Look')

//list
exports.listLook = async(req, res) => {
    try {
        const data = await Look.find({});
        res.status(200).send(data);
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'Falha ao carregar os looks' })
    }
};
//create
exports.createLook = async(req, res) => {
    console.table(req.file)
    try {
        const { nomeProduct, descritionProduct, tamanhoProduct, precoProduct } = req.body;
        const look = new Look({
            nome:nomeProduct,
            descricao:descritionProduct,
            tamanho:tamanhoProduct,
            preco:precoProduct,
            imagem: req.file.filename

        })
        console.log(look)
        await look.save();
        res.status(201).send({ message: 'Look cadastrado' })
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'Falha ao cadastrar look' })

    }
}