import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  // controla se a tela é a de login (true) ou cadastro (false)
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');

  const [nomeCadastro, setNomeCadastro] = useState('');
  const [cpfCadastro, setCpfCadastro] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [senhaCadastro, setSenhaCadastro] = useState('');
  const [confirmaSenhaCadastro, setConfirmaSenhaCadastro] = useState('');
  const [escolaridadeCadastro, setEscolaridadeCadastro] = useState('');

  // envia os dados para o back-end
  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      // localhost apontando para a porta 5000 e para a rota /auth/login
      const response = await fetch("http://localhost:5000/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailLogin, senha: senhaLogin })
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Login efetuado com sucesso!`);
        navigate('/home'); // Navega para a página inicial após login
      } else {
        alert(data.message || "Erro ao fazer login.");
      }
      
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor. O back-end está rodando?");
    }
  };

//função para enviar os dados de cadastro para o back-end
  const handleRegister = async (e) => {
    e.preventDefault(); 
    
    if (senhaCadastro !== confirmaSenhaCadastro) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nome: nomeCadastro, 
          cpf: cpfCadastro, 
          email: emailCadastro, 
          senha: senhaCadastro,
          escolaridade: escolaridadeCadastro 
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cadastro realizado com sucesso! Faça seu login.");
        setIsLogin(true); // Joga o usuário de volta para a tela de login
      } else {
        alert(data.message || "Erro ao realizar cadastro.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '10px', width: '350px', backgroundColor: 'white' }}>
        
        {/* Espaço para a Logo da Livraria */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2>Logo</h2>
        </div>

        {isLogin ? (
          // ================= TELA DE LOGIN =================
          // ADICIONADO: onSubmit={handleLogin} para acionar a função
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* ADICIONADO: value e onChange para o React ler a digitação */}
            <input 
              type="email" 
              placeholder="Email" 
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
              required
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            />
            
            <input 
              type="password" 
              placeholder="Senha" 
              value={senhaLogin}
              onChange={(e) => setSenhaLogin(e.target.value)}
              required
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            />
            
            <button type="submit" style={{ padding: '10px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
              Entrar
            </button>
            
            <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
              Ainda não é cadastrado?<br/>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }} style={{ fontWeight: 'bold', color: '#0056b3', textDecoration: 'none' }}>
                Faça seu cadastro
              </a>
            </p>
          </form>
    
        ) : (
          //tela de cadastro
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ textAlign: 'center', marginBottom: '15px', fontSize: '14px' }}>Preencha os campos abaixo para fazer cadastro:</p>
            
            <input type="text" placeholder="nome completo*" required value={nomeCadastro} onChange={(e) => setNomeCadastro(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="text" placeholder="CPF*" required value={cpfCadastro} onChange={(e) => setCpfCadastro(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="email*" required value={emailCadastro} onChange={(e) => setEmailCadastro(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="senha*" required value={senhaCadastro} onChange={(e) => setSenhaCadastro(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="Confirmar senha*" required value={confirmaSenhaCadastro} onChange={(e) => setConfirmaSenhaCadastro(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />

            <label style={{ fontSize: '14px', marginTop: '5px' }}>escolaridade:</label>
            <select value={escolaridadeCadastro} onChange={(e) => setEscolaridadeCadastro(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
              <option value="">Selecione seu grau</option>
              <option value="Fundamental I">Ensino Fundamental I</option>
              <option value="Fundamental II">Ensino Fundamental II</option>
              <option value="Medio">Ensino Médio</option>
            </select>

            <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
              FAZER CADASTRO
            </button>
            
            <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
              Já tem conta?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }} style={{ fontWeight: 'bold', color: '#0056b3', textDecoration: 'none' }}>
                Faça o Login
              </a>
            </p>
          </form>
        )}

      </div>
    </div>
  );
}

export default LoginPage;