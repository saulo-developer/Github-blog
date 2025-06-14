import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  PublicationsSection,
  PublicationsHeader,
  PublicationsTitle,
  PublicationsCount,
  SearchInput,
  Grid,
  ArticleCard,
  ArticleTitle,
  ArticleDescription,
  ArticleInfo
} from './styles/styled-components';
import PublicationList from './publicationList';

// Interface para definir a estrutura de uma publicação
// Garante que todas as propriedades necessárias do JSONPlaceholder estejam aqui
interface Publication {
  userId: number; // Propriedade vinda do JSONPlaceholder
  id: number;
  title: string;
  body: string; // CRUCIAL: JSONPlaceholder usa 'body' para o conteúdo principal
  date?: string; // Propriedade que você adiciona para exibição
}

const HomePage: React.FC = () => {
  // Tipagem explícita para os estados
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
        // axios.get<Publication[]> informa ao TypeScript o tipo esperado da resposta
        const response = await axios.get<Publication[]>('https://jsonplaceholder.typicode.com/posts');
        
        // Mapeia os dados brutos da API para a sua interface Publication
        const formattedData: Publication[] = response.data.map(post => ({
          id: post.id,
          userId: post.userId, // Garante que userId seja mapeado
          title: post.title,
          body: post.body, // Garante que 'body' seja mapeado corretamente
          date: new Date().toLocaleDateString('pt-BR') // Data adicionada para cada item
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
      {filteredPublications.length > 0 && (
        <PublicationList publications={filteredPublications} /> {/* Agora tipado corretamente */}
      )}
    </PublicationsSection>
  );
};

export default HomePage;

