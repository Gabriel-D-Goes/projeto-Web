import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookCard({ title, year, availability }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/livro')} 
      
      style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '15px', 
        margin: '10px', 
        width: '180px', 
        textAlign: 'center', 
        cursor: 'pointer', // Muda a setinha do mouse para a mãozinha
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {/* Espaço cinza simulando a capa na Home */}
      <div style={{ backgroundColor: '#e0e0e0', height: '180px', marginBottom: '15px', borderRadius: '4px' }}></div>
      
      <h4 style={{ margin: '10px 0', fontSize: '16px', color: '#333' }}>{title}</h4>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>Ano: {year}</p>
      
      {/*cor muda dependendo da palavra */}
      <p style={{ 
        margin: '10px 0 0 0', 
        fontSize: '14px', 
        fontWeight: 'bold', 
        color: availability === 'Disponível' ? '#28a745' : '#dc3545' 
      }}>
        {availability}
      </p>
    </div>
  );
}

export default BookCard;