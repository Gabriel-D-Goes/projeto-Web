import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookDetailsPage() {
  const navigate = useNavigate();

  const handleAlugar = () => {
    const numeroWhatsApp = "5548984000683"; 
    
    const mensagem = "Olá! Tenho interesse em alugar o livro 'O Nome do Vento'. Gostaria de saber mais informações.";
    
    // Formata o link para o padrão oficial do WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp numa nova aba do navegador
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      <button onClick={() => navigate('/home')} style={{ marginBottom: '20px', padding: '10px 15px', backgroundColor: '#eee', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
        ← Voltar para a Biblioteca
      </button>

      <div style={{ display: 'flex', gap: '40px', backgroundColor: '#fff', padding: '30px', borderRadius: '10px', border: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        
        {/* Espaço para a Capa do Livro */}
        <div style={{ width: '250px', height: '350px', backgroundColor: '#d9d9d9', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
          <span style={{ color: '#777', fontWeight: 'bold' }}>CAPA DO LIVRO</span>
        </div>

        {/* Informações e Ações */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '28px', color: '#333' }}>O Nome do Vento</h1>
          <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>Autor:</strong> Patrick Rothfuss</p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>Ano:</strong> 2007</p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>Tema:</strong> Fantasia Épica</p>

          <div style={{ marginTop: 'auto', borderTop: '2px solid #f0f0f0', paddingTop: '20px' }}>
            
            {/* O botão agora tem a cor verde oficial do WhatsApp para ficar mais intuitivo */}
            <button onClick={handleAlugar} style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '18px', transition: '0.3s' }}>
              QUERO ALUGAR NO WHATSAPP
            </button>
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default BookDetailsPage;