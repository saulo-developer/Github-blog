import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

// Importa a interface Publication do seu novo arquivo central de tipos
import { Publication } from '../types/index'; // <-- O caminho DEVE refletir onde você salvou src/types/index.ts

import {
  PublicationsSection,
  PublicationsHeader,
  PublicationsTitle,
  PublicationsCount,
  SearchInput,
 /* Grid,
  ArticleCard,
  ArticleTitle,
  ArticleDescription,
  ArticleInfo */
} from '../styles/styled-components';
import PublicationList from './publicationList';

// A definição da interface Publication NÃO ESTÁ mais aqui. Ela está em src/types/index.ts.

const HomePage: React.FC = () => {
  // Tipagem explícita para os estados usando a interface importada
  const [allPublications, setAllPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const fetchAllPublications = async () => {
      setLoading(true);
      setError(null);
      try {
        // axios.get<Publication[]> informa ao TypeScript o tipo esperado da resposta da API
        const response = await axios.get<Publication[]>('https://jsonplaceholder.typicode.com/posts');
        
        // Mapeia os dados brutos da API para a sua interface Publication centralizada
      const formattedData: Publication[] = response.data.map(post => ({
  id: post.id,
  userId: post.userId,
  title: post.title,
  body: post.body, // <-- Garanta que 'body' é o que está sendo usado aqui
  date: new Date().toLocaleDateString('pt-BR')
}));
        setAllPublications(formattedData);
        setFilteredPublications(formattedData); // Inicialmente, a lista filtrada é toda a lista
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error("Erro ao carregar publicações:", err.message);
          setError("Não foi possível carregar as publicações. Tente novamente mais tarde.");
        } else {
          console.error("Erro inesperado:", err);
          setError("Ocorreu um erro desconhecido ao carregar publicações.");
        }
        setAllPublications([]);
        setFilteredPublications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPublications();
  }, []); // Array de dependências vazio: executa apenas uma vez ao montar o componente

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase().trim();

    if (lowercasedSearchTerm === '') {
      setFilteredPublications(allPublications);
    } else {
      const results = allPublications.filter(pub =>
        pub.title.toLowerCase().includes(lowercasedSearchTerm) ||
        pub.body.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredPublications(results);
    }
  }, [searchTerm, allPublications]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return (
      <PublicationsSection>
        <p>Carregando publicações...</p>
      </PublicationsSection>
    );
  }

  if (error) {
    return (
      <PublicationsSection>
        <p style={{ color: 'red' }}>{error}</p>
      </PublicationsSection>
    );
  }

  return (
    <PublicationsSection>
      <PublicationsHeader>
        <PublicationsTitle>Publicações</PublicationsTitle>
        <PublicationsCount>{filteredPublications.length} publicações</PublicationsCount>
      </PublicationsHeader>
      <SearchInput
        type="text"
        placeholder="Buscar conteúdo..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredPublications.length === 0 && searchTerm !== '' && (
        <p>Nenhuma publicação encontrada para "{searchTerm}".</p>
      )}
      {filteredPublications.length === 0 && searchTerm === '' && (
        <p>Não há publicações disponíveis no momento.</p>
      )}
    {filteredPublications.length > 0 && ( // O parêntese aberto aqui
  <PublicationList publications={filteredPublications} />
)} {/* <--- Precisa ser fechado aqui (corrigido) */}
    </PublicationsSection>
  );
};

export default HomePage;