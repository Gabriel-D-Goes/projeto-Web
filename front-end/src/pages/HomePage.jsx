import React from 'react';
import BookCard from '../components/BookCard'; // Note que adicionamos dois pontos (..) para sair da pasta pages e achar os components

function HomePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Pesquise por um título, autor, categoria..." 
          style={{ width: '50%', padding: '10px', borderRadius: '5px' }}
        />
        <div>
          <span style={{ marginRight: '15px', fontWeight: 'bold' }}>Bem-vindo(a)!</span>
        </div>
      </header>

      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
        <h3>FAÇA PARTE DOS NOSSOS FÓRUNS</h3>
      </div>

      <main>
        <h2>Recomendados</h2>
        
        <section>
          <h3 style={{ borderBottom: '2px solid black', display: 'inline-block' }}>Matemática</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <BookCard title="Cálculo Vol 1" year="2021" availability="Disponível" />
            <BookCard title="Álgebra Linear" year="1993" availability="Indisponível" />

          <h3 style={{ borderBottom: '2px solid black', display: 'inline-block' }}>História</h3>
            <BookCard title="História Global" year="2024" availability="Disponível" />
            <BookCard title="Brasil Império" year="2017" availability="Indisponível" />
          </div>
        </section>
      </main>

    </div>
  );
}

export default HomePage;