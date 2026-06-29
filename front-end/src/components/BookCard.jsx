import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookCard({ livro }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/livro', { state: { livroSelecionado: livro } })} 
      style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '15px', 
        width: '180px', 
        textAlign: 'center', 
        cursor: 'pointer',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {}
      <img 
        src={livro.capa} 
        alt={`Capa de ${livro.titulo}`} 
        style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} 
      />
      
      <div>
        <h4 style={{ margin: '10px 0', fontSize: '16px', color: '#333' }}>{livro.titulo}</h4>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>Ano: {livro.ano}</p>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', fontWeight: 'bold', color: livro.status === 'Disponível' ? '#28a745' : '#dc3545' }}>
          {livro.status}
        </p>
      </div>
    </div>
  );
}

export default BookCard;