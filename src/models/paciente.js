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
        }
    },
    { timestamps: true}
)

    const paciente = mongoose.model('Paciente', schema)

    module.exports = paciente