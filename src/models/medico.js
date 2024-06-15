const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        usuario:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'usuario',
            required: false
        },
        
        telefone:{
            type: String,
            required: true
        },

        endereco: {
            type: String,
            required: true
        },
        especialidade:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Especialidade',
            required: false
        }
    },
    { timestamps: true}
)

    const medico = mongoose.model('Medico', schema)

    module.exports = medico