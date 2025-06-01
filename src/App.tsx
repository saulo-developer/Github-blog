import { AiFillGithub } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import {
  GlobalStyle,
  Container,
  Header,
  GitHubBlogLink,
  ProfileSection,
  ProfileImage,
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

interface Publication {
  title: string;
  description: string;
  date: string;
}

export const App: React.FC = () => { // Usando React.FC para tipar o componente funcional
  const publications: Publication[] = [
    { title: 'Título do Artigo 1', description: 'Descrição do artigo 1.', date: '01/06/2025' },
    { title: 'Outro Artigo Interessante', description: 'Mais detalhes sobre o segundo artigo.', date: '15/05/2025' },
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <GitHubBlogLink href="#">
            <AiFillGithub size={20} />
            GITHUB BLOG
          </GitHubBlogLink>
          <ProfileSection>
            <ProfileImage src="https://via.placeholder.com/100" alt="Cameron Williamson" />
            <ProfileInfo>
              <Name>Cameron Williamson</Name>
              <Description>Tristique volutpat pulvinar vel massa. Pellentesque egestas. Eu viverra massa quis dignissim. Aenean malesuada suscipit. Nunc vel volutpat pulvinar vel massa.</Description>
              <ProfileLinks>
                <a href="#"><AiFillGithub size={16} /> cameronwilli</a>
                <a href="#"><BsBookmarkFill size={16} /> Pocketcast</a>
                <span><FaUserFriends size={16} /> 32 seguidores</span>
              </ProfileLinks>
            </ProfileInfo>
          </ProfileSection>
        </Header>

        <PublicationsSection>
          <PublicationsHeader>
            <PublicationsTitle>Publicações</PublicationsTitle>
            <PublicationsCount>{publications.length} publicações</PublicationsCount>
          </PublicationsHeader>
          <SearchInput type="text" placeholder="Buscar conteúdo" />
          <Grid>
            {publications.map((publication, index) => (
              <ArticleCard key={index}>
                <ArticleTitle>{publication.title}</ArticleTitle>
                <ArticleDescription>{publication.description}</ArticleDescription>
                <ArticleInfo>{publication.date}</ArticleInfo>
              </ArticleCard>
            ))}
          </Grid>
        </PublicationsSection>
      </Container>
    </>
  );
};