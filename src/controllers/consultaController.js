const Consulta = require('../models/consulta')

async function create(req, res){
    const medico = new Consulta(req.body)
    const medicoCriado = await medico.save()
    res.status(201).json(medicoCriado)
}

async function getAll(req, res) {
    res.json(await Consulta.find().populate(['paciente', 'medico']))
}

async function getById(req, res) {
    const consulta = await Consulta.findById(req.params.id).populate(['paciente', 'medico'])
    if (consulta) {
        res.json(consulta)
    }else{
        res.status(404).json({mensagem: "Consulta não encontrado!"})
    }
}

async function update(req, res){
    const consultaAtualizado = await Consulta.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(consultaAtualizado) {
        res.json(consultaAtualizado)
    }else{
        res.status(404).json({mensagem: "Consulta não encontrado!"})
    }    
}

async function remove(req, res) {
    const consultaExcluido = await Consulta.findByIdAndDelete(req.params.id)
    if (consultaExcluido) {
        res.json({
            mensagem: "Consulta excluido com sucesso!",
            consultaExcluido
        })
    }else{
        res.status(404).json({mensagem: "Consulta não encontrado"})
    }
}

module.exports ={
    create,
    getAll,
    getById,
    update,
    remove
}
