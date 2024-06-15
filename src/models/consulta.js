const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        paciente:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Paciente',
            required: false
        },

        medico:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Medico',
            required: false
        },
        
        status:{
            type: String,
            enum:['Agendado', 'Não agendado'],
            required: true
        },
        data:{
            type: Date,
            required:true
        }
    },
    { timestamps: true}
)

    const consulta  = mongoose.model('Consulta', schema)

    module.exports = consulta