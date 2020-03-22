const { Router } = require('express');
const multer = require('multer');

const routes = Router();
const lookController = require('./controllers/look-controller');

routes.get('/', lookController.listLook);

var upload = multer({ dest: 'temp/' }).single('imagemProduct')

routes.post('/', function(req, res) {
    upload(req, res, function(err) {
        //caso der algum erro no Multer
        if (err instanceof multer.MulterError) {
            console.log(err);
            res.status(500).send({ message: 'Falha ao carregar imagem' });

        } else if (err) {
            console.log(err);
            res.status(500).send({ message: 'Falha ao carregar imagem' });
            // se der algum erro desonhecido enquanto carrega.
        }

        // caso der certo.
        lookController.createLook(req, res);
    })
})

module.exports = routes;