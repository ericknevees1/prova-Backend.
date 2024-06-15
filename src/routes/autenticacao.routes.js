const express = require('express');
const router = express.Router();

// Controller
const AutenticacaoController = require('../controllers/autenticacaoController');

// Validators
const { validarUsuario, validarLogin } = require('../validators/autenticacaoValidator');

// Rotas
router.post('/auth/registrar', validarUsuario, AutenticacaoController.registrar);

router.post('/auth/login', validarLogin, AutenticacaoController.entrar);


module.exports = router;
