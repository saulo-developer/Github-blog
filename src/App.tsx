import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import {
  GlobalStyle,
  Container,
  Header,
  GitHubBlogLink,
  ProfileSection,
  ProfileInfo,
  Name,
  Description,
  ProfileLinks,
  PublicationsSection,
  PublicationsHeader,
  PublicationsTitle,
  PublicationsCount,
  SearchInput,
  Grid,
  ArticleCard,
  ArticleTitle,
  ArticleDescription,
  ArticleInfo,
} from './styles/styled-components';

// Supondo que este componente exista e esteja no caminho correto
import publicationDetail from ".//components/publicationDetail"
import ProfileImageOne from ".//components/profileImageOne";


interface Publication {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <GitHubBlogLink to="/">
            <AiFillGithub size={20} />
            GITHUB BLOG
          </GitHubBlogLink>
          <ProfileSection>
       <ProfileImageOne
  img="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  alt="User"
 
/>
            <ProfileInfo>
              <Name>Usuário</Name>
              <Description>Tristique volutpat pulvinar vel massa. Pellentesque egestas. Eu viverra massa quis dignissim. Aenean malesuada suscipit. Nunc vel volutpat pulvinar vel massa.</Description>
              <ProfileLinks>
                <Link to="#">
                  <AiFillGithub size={16} /> usuário
                </Link>
                <Link to="#">
                  <BsBookmarkFill size={16} /> Pocketcast
                </Link>
                <span><FaUserFriends size={16} /> 32 seguidores</span>
              </ProfileLinks>
            </ProfileInfo>
          </ProfileSection>
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publication/:id" element={<PublicationDetailPage />} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
        {/* Outras seções fixas, como um footer, se houver */}
      </Container>
    </>
  );
};

const HomePage: React.FC = () => {
  const publications: Publication[] = [
    { id: 1, title: 'Título do Artigo 1', description: 'Descrição do artigo 1.', date: '01/06/2025' },
    { id: 2, title: 'Outro Artigo Interessante', description: 'Mais detalhes sobre o segundo artigo.', date: '15/05/2025' },
    { id: 3, title: 'Um Terceiro Artigo Aqui', description: 'Conteúdo breve do terceiro artigo.', date: '20/05/2025' },
  ];

  return (
    <PublicationsSection>
      <PublicationsHeader>
        <PublicationsTitle>Publicações</PublicationsTitle>
        <PublicationsCount>{publications.length} publicações</PublicationsCount>
      </PublicationsHeader>
      <SearchInput type="text" placeholder="Buscar conteúdo" />
      <PublicationList publications={publications} />
    </PublicationsSection>
  );
};

const PublicationList: React.FC<{ publications: Publication[] }> = ({ publications }) => {
  return (
    <Grid>
      {publications.map((publication) => (
        <ArticleCard key={publication.id}>
          <ArticleTitle>{publication.title}</ArticleTitle>
          <ArticleDescription>
            <Link to={`/publication/${publication.id}`}>{publication.description}</Link>
          </ArticleDescription>
          <ArticleInfo>{publication.date}</ArticleInfo>
        </ArticleCard>
      ))}
    </Grid>
  );
};

const PublicationDetailPage: React.FC = () => {
  return (
    <PublicationsSection>
      <h2>Detalhes da Publicação</h2>
      <PublicationDetailContent />
    </PublicationsSection>
  );
};

const PublicationDetailContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Simulação de dados detalhados da publicação
  const publicationDetails = {
    1: { title: 'Título Detalhado 1', content: 'Este é o conteúdo detalhado do artigo 1. Ele contém informações mais aprofundadas sobre o tópico abordado no título.', moreInfo: 'Informação adicional sobre o artigo 1.' },
    2: { title: 'Título Detalhado 2', content: 'Aqui estão os detalhes do outro artigo interessante. Discutimos vários aspectos relevantes neste texto.', moreInfo: 'Mais detalhes contextuais sobre o artigo 2.' },
    3: { title: 'Título Detalhado 3', content: 'O conteúdo deste terceiro artigo explora um tema diferente. Leia para saber mais.', moreInfo: 'Informações suplementares do artigo 3.' },
  };

  const publicationId = parseInt(id || '', 10);
  const details = publicationDetails[publicationId];

  if (!details) {
    return <div>Publicação não encontrada.</div>;
  }

  return (
    <div>
      <h3>{details.title}</h3>
      <p>{details.content}</p>
      {/* Supondo que publicationDetail seja um componente para exibir detalhes adicionais */}
      {publicationDetail && <publicationDetail publication={details} />}
    </div>
  );
};