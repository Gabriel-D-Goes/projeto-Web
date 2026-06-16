const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
const users = require('../models/users');

const SECRET = process.env.JWT_SECRET || "SEGREDO_SUPER_SECRETAMENTE_SECRETO";

exports.registrarUsuario = async (dados) => {
    const { nome, cpf, email, senha, confirmaSenha, grauDeEnsino } = dados;

    if (!nome || !cpf || !email || !senha || !confirmaSenha || !grauDeEnsino) {
        throw new Error("Todos os campos são obrigatórios!");
    }

    if (senha !== confirmaSenha) {
        throw new Error("As senhas devem ser iguais!");
    }

    const userExists = await users.findOne ({$or: [{email: email}, {cpf: cpf}] });

    if (userExists) {
        throw new Error("Email ou CPF já cadastrados!");
    }

    const salzinho = await bcrypt.genSalt(10);
    const senhaSalgada = await bcrypt.hash(senha, salzinho);

    const novoUsuario = new User({
        id: Date.now().toString() + userDB.length.toString(),
        nome,
        cpf,
        email,
        senha: senhaSalgada,
        grauDeEnsino });

    await novoUsuario.save();

    const token = jwt.sign({ id: novoUsuario.id }, SECRET, { expiresIn: '1h' });

    return { id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email, token };

};

exports.fazerLogin = async (dados) => {
    const { email, senha } = dados;

    if (!email || !senha) {
        throw new Error("Email e senha são obrigatórios!");
    }

    const usuario = await User.findOne({email: email });

    if (!usuario) {
        throw new Error("Email ou senha inválidos", 401);
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
        throw new Error("Email ou senha inválidos", 401);
    }

    const token = jwt.sign(
    { id: usuario.id, email: usuario.email }, SECRET, { expiresIn: '1h' }
    );

    return {
        token,
        user: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }
    };
};