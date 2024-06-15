const yup = require('yup');

const schema = yup.object().shape({
    usuario: yup.string('Campo precisa ser um texto!'),
    telefone: yup
    .string("Campo precisa ser numérico")
    .required("Campo obrigatório"),
    endereco: yup
    .string('Campo obrigatório')
    .required('Endereço é obrigatório'),
});

function PacienteValidador(req, res, next){
    console.log('Dados recebidos para validação:', req.body);
    schema
    .validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {
        const errors = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro;
        });
        res.status(400).json({
            mensagem: "Falha na validação dos campos",
            erros
        });
    });
}

module.exports = {
    PacienteValidador
};
