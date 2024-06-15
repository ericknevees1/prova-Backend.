const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
    .string('Campo precisa ser um texto!')
    .required('Campo obrigatório!'),
    email: yup
    .string('Campo precisa ser um email!')
    .required('Email é obrigatório')
    .email('Email inválido'),
    tipo: yup
    .string('Campo obrigatório')
    .required('Tipo obrigatório')
    .oneOf(['Paciente', 'Médico'], 'Tipo deve ser "Paciente" ou "Médico"'),
    data: yup
    .date('Data inválida')
})

function UsuarioValidador(req, res, next){
    schema
    .validate(req.body, { abortEarly: false})
    .then(() => next())
    .catch(err => {
        console.log(err)
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
    UsuarioValidador
}