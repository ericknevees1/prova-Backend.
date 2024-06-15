const yup = require('yup')

const schema = yup.object().shape({
    usuario: yup
    .string('Campo precisa ser um texto!'),
    telefone: yup
    .string("Campo precisa ser numérico")
    .required("Campo obrigatório"),
    endereco: yup
    .string('Campo obrigatório')
    .required('Endereço é obrigatório'),
    especialidade: yup
    .string('Campo precisa ser um texto!')
})

function MedicoValidador(req, res, next){
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
                erros
            }
        )
    })
}

module.exports = {
    MedicoValidador
}
