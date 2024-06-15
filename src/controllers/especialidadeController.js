const Especialidade = require('../models/especialidade')

async function create(req, res){
    const especialidade = new Especialidade(req.body)
    const especialidadeCriado = await especialidade.save()
    res.status(201).json(especialidadeCriado)
}

async function getAll(req, res) {
    res.json(await Especialidade.find())
}

async function getById(req, res) {
    const especialidade = await Especialidade.findById(req.params.id)
    if (especialidade) {
        res.json(especialidade)
    }else{
        res.status(404).json({mensagem: "Especialidade não encontrado!"})
    }
}

async function update(req, res){
    const especialidadeAtualizado = await Especialidade.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(especialidadeAtualizado) {
        res.json(especialidadeAtualizado)
    }else{
        res.status(404).json({mensagem: "Especialidade não encontrado!"})
    }    
}

async function remove(req, res) {
    const especialidadeExcluido = await Especialidade.findByIdAndDelete(req.params.id)
    if (especialidadeExcluido) {
        res.json({
            mensagem: "Especialidade excluido com sucesso!",
            especialidadeExcluido
        })
    }else{
        res.status(404).json({mensagem: "Especialidade não encontrado"})
    }
}

module.exports ={
    create,
    getAll,
    getById,
    update,
    remove
}