const yup = require('yup')

const schema = yup.object().shape({
    paciente: yup
    .string('Campo precisa ser um texto!'),
    medico: yup
    .string("Campo precisa ser um texto! "),
    data: yup
    .date('Data inválida'),
    status: yup
    .string('Campo obrigatório')
    .required('Status obrigatório!')
    .oneOf(['Agendado', 'Não agendado'], 'Status deve ser "Agendado" ou "Não agendado"')

})

function ConsultaValidador(req, res, next){
    schema
    .validate(req.body, { abortEarly: false})
    .then(() => next())
    .catch(err => {
        
        const errors = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro
        })
        res.status(400).json(
            {
                mensagem: "Falha na validação dos campos",
                erros: errors
            }
        )
    })
}

module.exports = {
    ConsultaValidador
}
