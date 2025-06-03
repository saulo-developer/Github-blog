import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { Route, Routes, Link } from 'react-router-dom';

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
  StyledImage,
  // StyledImage // Não é mais necessário se você usar ProfileImageOne
} from './styles/styled-components';

// Importa o componente PublicationDetail (com letra maiúscula)
import PublicationDetail from './components/publicationDetail';
import ProfileImageOne from './components/profileImageOne';

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
            {/* Agora usando o componente ProfileImageOne */}
        <StyledImage
  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
   alt="Usuário"
/>
            <ProfileInfo>
              <Name>Usuário</Name>
              <Description>
                Tristique volutpat pulvinar vel massa. Pellentesque egestas. Eu viverra massa quis dignissim. Aenean
                malesuada suscipit. Nunc vel volutpat pulvinar vel massa.
              </Description>
              <ProfileLinks>
                <Link to="#">
                  <AiFillGithub size={16} /> usuário
                </Link>
                <Link to="#">
                  <BsBookmarkFill size={16} /> Pocketcast
                </Link>
                <span>
                  <FaUserFriends size={16} /> 32 seguidores
                </span>
              </ProfileLinks>
            </ProfileInfo>
          </ProfileSection>
        </Header>
        {/*
          Aqui definimos as rotas da sua aplicação.
          A rota "/" renderiza a HomePage.
          A rota "/publication/:id" renderiza o componente PublicationDetail,
          que agora será responsável por buscar e exibir os detalhes.
        */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publication/:id" element={<PublicationDetail />} />
          {/* Opcional: Adicionar uma rota para lidar com páginas não encontradas (404) */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Container>
    </>
  );
};

// Componente HomePage: Exibe a lista de publicações
const HomePage: React.FC = () => {
  // Dados de publicações (simulados)
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

// Componente PublicationList: Renderiza a grade de artigos
const PublicationList: React.FC<{ publications: Publication[] }> = ({ publications }) => {
  return (
    <Grid>
      {publications.map((publication) => (
        // Envolve o ArticleCard inteiro no Link para que toda a área seja clicável
        <Link to={`/publication/${publication.id}`} key={publication.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ArticleCard>
            <ArticleTitle>{publication.title}</ArticleTitle>
            <ArticleDescription>
              {publication.description}
            </ArticleDescription>
            <ArticleInfo>{publication.date}</ArticleInfo>
          </ArticleCard>
        </Link>
      ))}
    </Grid>
  );
};
