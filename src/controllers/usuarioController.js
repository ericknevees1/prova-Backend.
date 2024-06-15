const Usuario = require('../models/usuario')

async function create(req, res){
    const usuario = new Usuario(req.body)
    const usuarioCriado = await usuario.save()
    res.status(201).json(usuarioCriado)
}

async function getAll(req, res) {
    res.json(await Usuario.find())
}

async function getById(req, res) {
    const usuario = await Usuario.findById(req.params.id)
    if (usuario) {
        res.json(usuario)
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado!"})
    }
}

async function update(req, res){
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(usuarioAtualizado) {
        res.json(usuarioAtualizado)
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado!"})
    }    
}

async function remove(req, res) {
    const usuarioExcluido = await Usuario.findByIdAndDelete(req.params.id)
    if (usuarioExcluido) {
        res.json({
            mensagem: "Usuário excluido com sucesso!",
            usuarioExcluido
        })
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado"})
    }
}

module.exports ={
    create,
    getAll,
    getById,
    update,
    remove
}