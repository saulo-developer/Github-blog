import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { Route, Routes, Link } from 'react-router-dom';

import {
  GlobalStyle,
  Container,
  Header,
  GlobalGitHubBlogLink, // <-- Importação do componente com o nome CORRETO (GlobalGitHubBlogLink)
  ProfileSection,
  ProfileInfo,
  Name,
  Description,
  ProfileLinks,
} from './styles/styled-components';

import HomePage from './components/HomePage';
import PublicationDetail from './components/publicationDetail';
import ProfileImageOne from './components/profileImageOne'; // <-- Seu componente de imagem de perfil

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          {/* Uso do componente com o nome CORRETO */}
          <GlobalGitHubBlogLink to="/"> {/* */}
            <AiFillGithub size={20} />
            GITHUB BLOG
          </GlobalGitHubBlogLink>
          <ProfileSection>
            <ProfileImageOne
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" // Imagem de perfil placeholder
              alt="Foto de perfil do usuário"
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publication/:id" element={<PublicationDetail />} />
        </Routes>
      </Container>
    </>
  );
};
