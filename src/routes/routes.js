const express = require('express')
const router = express.Router()

// controllers
const usuarioController = require('../controllers/usuarioController')
const pacienteController = require('../controllers/pacienteController')
const especialidadeController = require('../controllers/especialidadeController.js')
const medicoController = require('../controllers/medicoController.js')
const consultaController = require('../controllers/consultaController.js')
// validators
const { validarID } = require('../validators/idvalidator.js')
const { UsuarioValidador } = require('../validators/usuarioValidator.js')
const { PacienteValidador } = require('../validators/pacienteValidator.js')
const { EspecialidadeValidador } = require('../validators/especialidadeValidator.js')
const { MedicoValidador } = require('../validators/medicoValidator.js')
const { ConsultaValidador } = require('../validators/consultaValidator.js')

// usuario
router.post('/Usuario', UsuarioValidador, usuarioController.create)
router.get('/Usuario', usuarioController.getAll)
router.get('/Usuario/:id', validarID, usuarioController.getById)
router.put('/Usuario/:id', validarID, UsuarioValidador, usuarioController.update)
router.delete('/Usuario/:id', validarID, usuarioController.remove)

// paciente
router.post('/Paciente', PacienteValidador, pacienteController.create)
router.get('/Paciente', pacienteController.getAll)
router.get('/Paciente/:id', validarID, pacienteController.getById)
router.put('/Paciente/:id', validarID, PacienteValidador, pacienteController.update)
router.delete('/Paciente/:id', validarID, pacienteController.remove)

// Médico
router.post('/Medico', MedicoValidador, medicoController.create)
router.get('/Medico', medicoController.getAll)
router.get('/Medico/:id', validarID, medicoController.getById)
router.put('/Medico/:id', validarID, MedicoValidador, medicoController.update)
router.delete('/Medico/:id', validarID, medicoController.remove)

// Especialidade
router.post('/Especialidade', EspecialidadeValidador, especialidadeController.create)
router.get('/Especialidade', especialidadeController.getAll)
router.get('/Especialidade/:id', validarID, especialidadeController.getById)
router.put('/Especialidade/:id', validarID, EspecialidadeValidador, especialidadeController.update)
router.delete('/Especialidade/:id', validarID, especialidadeController.remove)

//Consulta
router.post('/Consulta', ConsultaValidador, consultaController.create)
router.get('/Consulta', consultaController.getAll)
router.get('/Consulta/:id', validarID, consultaController.getById)
router.put('/Consulta/:id', validarID, ConsultaValidador, consultaController.update)
router.delete('/Consulta/:id', validarID, consultaController.remove)

module.exports = router;
