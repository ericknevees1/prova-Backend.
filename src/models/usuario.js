const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
        
        email:{
            type: String,
            required: true
        },

        tipo:{
            type: String,
            enum:['Paciente', 'Médico'],
            required: true
        },
        data:{
            type: Date,
            required:true
        }
    },
    { timestamps: true}
)

    const usuario = mongoose.model('usuario', schema)

    module.exports = usuario