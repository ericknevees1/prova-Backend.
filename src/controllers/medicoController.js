const Medico = require('../models/medico')
const Usuario = require('../models/usuario'); // Adicione esta linha
const Especialidade = require('../models/especialidade'); // Certifique-se de que Especialidade também está importado


async function create(req, res){
    const medico = new Medico(req.body)
    const medicoCriado = await medico.save()
    res.status(201).json(medicoCriado)
}

async function getAll(req, res) {
    res.json(await Medico.find().populate('usuario', 'Especialidade'))
}

async function getById(req, res) {
    const medico = await Medico.findById(req.params.id).populate('usuario', 'Especialidade')
    if (medico) {
        res.json(medico)
    }else{
        res.status(404).json({mensagem: "Medico não encontrado!"})
    }
}

async function update(req, res){
    const medicoAtualizado = await Medico.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(medicoAtualizado) {
        res.json(medicoAtualizado)
    }else{
        res.status(404).json({mensagem: "Medico não encontrado!"})
    }    
}

async function remove(req, res) {
    const medicoExcluido = await Medico.findByIdAndDelete(req.params.id)
    if (medicoExcluido) {
        res.json({
            mensagem: "Médico excluido com sucesso!",
            medicoExcluido
        })
    }else{
        res.status(404).json({mensagem: "Médico não encontrado"})
    }
}

module.exports ={
    create,
    getAll,
    getById,
    update,
    remove
}
