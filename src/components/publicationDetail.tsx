import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  PublicationsSection,
  PublicationsHeader,
  PublicationsTitle,
} from '../styles/styled-components'; // Importe os estilos necessários

interface Publication {
  id: number;
  title: string;
  description: string;
  date: string;
  content: string; // Adicionando um campo 'content' para os detalhes
}

// Supondo que você tenha um array de publicações em algum lugar
const allPublications: Publication[] = [
  { id: 1, title: 'Título do Artigo 1', description: 'Descrição do artigo 1.', date: '01/06/2025', content: 'Este é o conteúdo detalhado do primeiro artigo. Ele pode conter várias parágrafos, imagens e outras informações.' },
  { id: 2, title: 'Outro Artigo Interessante', description: 'Mais detalhes sobre o segundo artigo.', date: '15/05/2025', content: 'Aqui estão os detalhes expandidos sobre o segundo artigo. Discutimos vários aspectos importantes e fornecemos exemplos.' },
  { id: 3, title: 'Um Terceiro Post', description: 'Conteúdo sobre o terceiro artigo.', date: '20/05/2025', content: 'O terceiro artigo explora um tópico completamente diferente. Mergulhamos fundo em suas complexidades e oferecemos uma análise abrangente.' },
];

const publicationDetail: React.FC = () => {
  const { id: idParam } = useParams();
  const publicationId = parseInt(idParam || '', 10);
  const publication = allPublications.find(pub => pub.id === publicationId);

  if (!publication) {
    return (
      <PublicationsSection>
        <h2>Publicação não encontrada.</h2>
        <Link to="/">Voltar para a lista</Link>
      </PublicationsSection>
    );
  }

  return (
    <PublicationsSection>
      <PublicationsHeader>
        <PublicationsTitle>{publication.title}</PublicationsTitle>
      </PublicationsHeader>
      <div>
        <p>Data de Publicação: {publication.date}</p>
        <div style={{ marginTop: '20px' }}>
          <h3>Conteúdo:</h3>
          <p>{publication.content}</p>
          {/* Você pode formatar o conteúdo de forma mais elaborada aqui,
             renderizando HTML, imagens, etc., dependendo da sua necessidade. */}
        </div>
        <Link to="/">Voltar para a lista</Link>
      </div>
    </PublicationsSection>
  );
};

export default publicationDetail;