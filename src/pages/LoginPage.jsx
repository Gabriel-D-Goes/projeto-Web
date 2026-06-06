import React, { useState } from 'react';

function LoginPage() {
  // controla se a tela é a de login (true) ou cadastro (false)
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '10px', width: '350px', backgroundColor: 'white' }}>
        
        {/* Espaço para a Logo da Livraria */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2>Logo </h2>
        </div>

    {isLogin ? (
          // ================= TELA DE LOGIN =================
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Usuário" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="Senha" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            
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
          // ================= TELA DE CADASTRO =================
          <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ textAlign: 'center', marginBottom: '15px', fontSize: '14px' }}>Preencha os campos abaixo para fazer cadastro:</p>
            
            <input type="text" placeholder="nome completo*" required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="text" placeholder="CPF*" required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="email*" required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="senha*" required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="Confirmar senha*" required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />

            <label style={{ fontSize: '14px', marginTop: '5px' }}>escolaridade:</label>
            <select style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
              <option>Selecione seu grau</option>
              <option>Ensino Fundamental I</option>
              <option>Ensino Fundamental II</option>
              <option>Ensino Médio</option>
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