import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

// MINI BANCO DE DADOS FICTÍCIO COM 20 LIVROS
const livrosMock = [
  { id: 1, titulo: "O Nome do Vento", autor: "Patrick Rothfuss", ano: 2007, tema: "Fantasia", status: "Disponível", capa: "https://m.media-amazon.com/images/I/91rPbdjwI+L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, titulo: "Cálculo Vol 1", autor: "James Stewart", ano: 2021, tema: "Matemática", status: "Disponível", capa: "https://m.media-amazon.com/images/I/71wE7lRjV2L._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, titulo: "Álgebra Linear", autor: "Boldrini", ano: 1993, tema: "Matemática", status: "Indisponível", capa: "https://m.media-amazon.com/images/I/81xPvu1KlcL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, titulo: "1984", autor: "George Orwell", ano: 1949, tema: "Ficção Científica", status: "Disponível", capa: "https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg" },
  { id: 5, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, tema: "Romance", status: "Disponível", capa: "https://m.media-amazon.com/images/I/61r-v6W33vL._AC_UF1000,1000_QL80_.jpg" },
  { id: 6, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, tema: "Fantasia", status: "Indisponível", capa: "https://m.media-amazon.com/images/I/715eWZcFMhL._AC_UF1000,1000_QL80_.jpg" },
  { id: 7, titulo: "Fundação", autor: "Isaac Asimov", ano: 1951, tema: "Ficção Científica", status: "Disponível", capa: "https://m.media-amazon.com/images/I/812D-31v2zL._AC_UF1000,1000_QL80_.jpg" },
  { id: 8, titulo: "Sapiens", autor: "Yuval Noah Harari", ano: 2011, tema: "História", status: "Disponível", capa: "https://m.media-amazon.com/images/I/71rBq9eLwNL._AC_UF1000,1000_QL80_.jpg" },
  { id: 9, titulo: "Breve História do Tempo", autor: "Stephen Hawking", ano: 1988, tema: "Física", status: "Disponível", capa: "https://m.media-amazon.com/images/I/81kHjGInoBL._AC_UF1000,1000_QL80_.jpg" },
  { id: 10, titulo: "A Arte da Guerra", autor: "Sun Tzu", ano: -500, tema: "História", status: "Indisponível", capa: "https://m.media-amazon.com/images/I/61A6aT+uBVL._AC_UF1000,1000_QL80_.jpg" },
  { id: 11, titulo: "O Código Da Vinci", autor: "Dan Brown", ano: 2003, tema: "Mistério", status: "Disponível", capa: "https://m.media-amazon.com/images/I/81D2GvH0rFL._AC_UF1000,1000_QL80_.jpg" },
  { id: 12, titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008, tema: "Tecnologia", status: "Disponível", capa: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UF1000,1000_QL80_.jpg" },
  { id: 13, titulo: "O Programador Pragmático", autor: "Andrew Hunt", ano: 1999, tema: "Tecnologia", status: "Indisponível", capa: "https://m.media-amazon.com/images/I/71Xm3a+2LwL._AC_UF1000,1000_QL80_.jpg" },
  { id: 14, titulo: "Pai Rico, Pai Pobre", autor: "Robert Kiyosaki", ano: 1997, tema: "Finanças", status: "Disponível", capa: "https://m.media-amazon.com/images/I/811nCEuA9NL._AC_UF1000,1000_QL80_.jpg" },
  { id: 15, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, tema: "Fantasia", status: "Disponível", capa: "https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UF1000,1000_QL80_.jpg" },
  { id: 16, titulo: "Neuromancer", autor: "William Gibson", ano: 1984, tema: "Ficção Científica", status: "Indisponível", capa: "https://m.media-amazon.com/images/I/91NbsU5YnZL._AC_UF1000,1000_QL80_.jpg" },
  { id: 17, titulo: "A Culpa é das Estrelas", autor: "John Green", ano: 2012, tema: "Romance", status: "Disponível", capa: "https://m.media-amazon.com/images/I/81a+4kH2i4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 18, titulo: "O Poder do Hábito", autor: "Charles Duhigg", ano: 2012, tema: "Autoajuda", status: "Disponível", capa: "https://m.media-amazon.com/images/I/81iRzHk6k1L._AC_UF1000,1000_QL80_.jpg" },
  { id: 19, titulo: "Estruturas de Dados", autor: "Szwarcfiter", ano: 1994, tema: "Tecnologia", status: "Disponível", capa: "https://m.media-amazon.com/images/I/61jZzN9Nf9L._AC_UF1000,1000_QL80_.jpg" },
  { id: 20, titulo: "Inteligência Artificial", autor: "Peter Norvig", ano: 1995, tema: "Tecnologia", status: "Indisponível", capa: "https://m.media-amazon.com/images/I/81F5GIfbBfL._AC_UF1000,1000_QL80_.jpg" }
];

function HomePage() {
  //ESTADOS DA PÁGINA
  const [busca, setBusca] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('Visitante');

  //RECUPERAR INFORMAÇÕES DO USUÁRIO
  useEffect(() => {
    // Pega o token que salvamos no login
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        // token JWT tem 3 partes separadas por ponto. A parte [1] é onde o back-end guardou os dados
        //  atob() para traduzir a criptografia base64 para texto
        const payload = JSON.parse(atob(token.split('.')[1]));
        setNomeUsuario(payload.nome); //puxa o nome do usuário
      } catch (error) {
        console.error("Erro ao ler o token do usuário:", error);
      }
    }
  }, []);

  //BARRA DE PESQUISA
  // verifica se o título, autor ou tema inclui a palavra
  const livrosFiltrados = livrosMock.filter(livro => 
    livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    livro.autor.toLowerCase().includes(busca.toLowerCase()) ||
    livro.tema.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      
      {/* CABEÇALHO COM BARRA DE PESQUISA E NOME */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Pesquise por um título, autor ou categoria..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)} // atualiza a busca em tempo real
          style={{ width: '60%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          Bem-vindo(a), <span style={{ color: '#0056b3' }}>{nomeUsuario}</span>!
        </div>
      </div>

      {/* BANNER DOS FÓRUNS */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '30px', textAlign: 'center', borderRadius: '8px', marginBottom: '40px', fontWeight: 'bold', color: '#555', letterSpacing: '2px' }}>
        FAÇA PARTE DOS NOSSOS FÓRUNS
      </div>

      <h2 style={{ textAlign: 'center', borderBottom: '2px solid #ccc', paddingBottom: '10px', marginBottom: '30px' }}>
        Acervo da Biblioteca
      </h2>

      {/* LISTAGEM DOS LIVROS MOCKADOS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {livrosFiltrados.length > 0 ? (
          livrosFiltrados.map((livro) => (
            <BookCard key={livro.id} livro={livro} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#777', fontSize: '18px', marginTop: '20px', width: '100%' }}>
            Nenhum livro encontrado para "{busca}".
          </p>
        )}
      </div>

    </div>
  );
}

export default HomePage;