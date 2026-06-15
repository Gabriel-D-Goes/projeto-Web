const authService = require("../services/authService");

exports.register = async (req, res) => {
    try {
        //dados da crição de conta
        const {nome, cpf, email, senha, confirmaSenha} = req.body;

        //busca função la do service
        const novoUsuario = await authservice.register({
            nome, cpf, email, senha, confirmaSenha
        });

        res.status(201).json({ message: "Seja bem-vindo, " + novoUsuario.nome + "!" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const resultadoLogin = await authService.login(req.body);

        res.status(200).json({
            message: "Login bem-sucedido!",
            token :resultadoLogin.token,
            user: resultadoLogin.user
        });

    } catch (error) {
        const statusCode = error.message === "Email ou senha inválidos" ? 401 : 400;
        res.status(statusCode).json({ error: error.message });
    }
};