const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
    .string('Campo de especialidade precisa ser um texto!')
    .required('Campo obrigatório!'),
    descricao: yup
    .string('Campo de descrição de especialidade precisa ser um texto!')
    .required('Descrição de especialidade é obrigatório')
})

function EspecialidadeValidador(req, res, next){
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
    EspecialidadeValidador
}