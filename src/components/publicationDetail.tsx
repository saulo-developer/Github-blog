import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


// Importe suas styled-components específicas para detalhes de publicação, se houver
import { PublicationsSection } from '../styles/styled-components';


interface PublicationDetails {
  id: number;
  title: string;
  content: string;
  moreInfo?: string; // Propriedade opcional
}

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const [publication, setPublication] = useState<PublicationDetails | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulação de busca de dados (em uma aplicação real, seria uma chamada de API)
  useEffect(() => {
    setLoading(true);
    // Dados de exemplo para simular uma API
    const mockPublicationDetails: { [key: number]: PublicationDetails } = {
      1: { id: 1, title: 'Aprofundando no Artigo 1: Introdução ao React Hooks', content: 'Este é o conteúdo detalhado do primeiro artigo, explorando o uso de useState e useEffect em componentes funcionais.', moreInfo: 'Hooks são uma adição poderosa ao React 16.8.' },
      2: { id: 2, title: 'Outro Artigo Interessante: Gerenciamento de Estado com Context API', content: 'Aqui abordamos como a Context API pode ser utilizada para gerenciar o estado global da sua aplicação sem a necessidade de bibliotecas externas.', moreInfo: 'Ideal para dados que precisam ser acessados por muitos componentes.' },
      3: { id: 3, title: 'Um Terceiro Artigo: Otimizando Performance em Aplicações React', content: 'Explore técnicas como memoização, virtualização de listas e lazy loading para melhorar a performance de suas aplicações React.', moreInfo: 'Componentes puros e React.memo são seus amigos.' },
    };

    // Simula um atraso de rede para a busca de dados
    setTimeout(() => {
      const publicationId = parseInt(id || '', 10); // Converte o ID da URL para número
      const foundPublication = mockPublicationDetails[publicationId];
      setPublication(foundPublication || null); // Define a publicação encontrada ou null
      setLoading(false); // Finaliza o estado de carregamento
    }, 500); // Atraso de 0.5 segundo para simular requisição
  }, [id]); // O efeito é re-executado se o 'id' na URL mudar

  if (loading) {
    return (
      <PublicationsSection>
        <h2>Carregando detalhes da publicação...</h2>
      </PublicationsSection>
    );
  }

  if (!publication) {
    return (
      <PublicationsSection>
        <h2>Publicação não encontrada.</h2>
        <p>A publicação com ID "{id}" não existe ou não foi carregada.</p>
        <Link to="/">Voltar para a lista de publicações</Link>
      </PublicationsSection>
    );
  }

  return (
    <PublicationsSection>
      <h3>{publication.title}</h3>
      <p>{publication.content}</p>
      {publication.moreInfo && <p>Mais informações: {publication.moreInfo}</p>}
      <Link to="/">Voltar para a lista de publicações</Link>
    </PublicationsSection>
  );
};

export default PublicationDetail; // Exporta o componente como default