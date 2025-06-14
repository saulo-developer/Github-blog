import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Publication } from '../types/index'; 

// Supondo que você tenha estes componentes estilizados
import {
  Grid,
  ArticleCard,
  ArticleTitle,
  ArticleDescription,
  ArticleInfo,
  PublicationsSection, // Para envolver o componente
} from '../styles/styled-components';


const PublicationSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Efeito para carregar TODAS as publicações uma única vez (ou uma grande parte delas)
  // ou para buscar na API com um termo de busca, dependendo da sua API
  useEffect(() => {
    const fetchAllPublications = async () => {
      setLoading(true);
      setError(null);
      try {
        // Esta API retorna uma lista de posts.
        // Se sua API tem um endpoint de busca (ex: /publications?q=termo), use-o.
        const response = await axios.get<Publication[]>('https://jsonplaceholder.typicode.com/posts');
        setPublications(response.data); // Armazena todas as publicações
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error("Erro ao carregar publicações:", err.message);
          setError("Não foi possível carregar as publicações. Tente novamente mais tarde.");
        } else {
          console.error("Erro inesperado:", err);
          setError("Ocorreu um erro desconhecido ao carregar publicações.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllPublications();
  }, []); // Array de dependências vazio: executa apenas uma vez no montagem do componente

  // Efeito para filtrar as publicações sempre que o 'searchTerm' ou 'publications' mudar
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPublications(publications); // Se o campo de busca estiver vazio, mostra todas
    } else {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const results = publications.filter(pub =>
        pub.title.toLowerCase().includes(lowercasedSearchTerm) ||
        pub.body.toLowerCase().includes(lowercasedSearchTerm) // Busca também no conteúdo
      );
      setFilteredPublications(results);
    }
  }, [searchTerm, publications]); // Este efeito roda quando o termo de busca ou a lista original mudam

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <PublicationsSection>
      <h2>Buscar Publicações</h2>
      <input
        type="text"
        placeholder="Digite para buscar publicações..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: '100%',
          padding: '10px',
          margin: '20px 0',
          fontSize: '1em',
          borderRadius: '5px',
          border: '1px solid #ddd',
        }}
      />

      {loading && <p>Carregando publicações...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && filteredPublications.length === 0 && (
        <p>Nenhuma publicação encontrada para "{searchTerm}".</p>
      )}

      <Grid>
        {!loading && !error && filteredPublications.map((publication) => (
          <Link
            to={`/publication/${publication.id}`}
            key={publication.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ArticleCard>
              <ArticleTitle>{publication.title}</ArticleTitle>
              {/* No JSONPlaceholder, 'body' é o que você usou como 'description' antes */}
              <ArticleDescription>
                {publication.body.substring(0, 100)}... {/* Limita a descrição */}
              </ArticleDescription>
              <ArticleInfo>ID: {publication.id}</ArticleInfo> {/* Exemplo de info */}
            </ArticleCard>
          </Link>
        ))}
      </Grid>
    </PublicationsSection>
  );
};

export default PublicationSearch;