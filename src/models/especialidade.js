const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
        
        descricao:{
            type: String,
            required: true
        }
    },
    { timestamps: true}
)

    const especialidade = mongoose.model('Especialidade', schema)

    module.exports = especialidade