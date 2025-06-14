import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom'; // <-- IMPORTANTE: Link deve ser importado aqui!

// Variáveis de Cores e Estilos Comuns
const colors = {
  primary: '#007bff', // Azul vibrante usado para links, focos, etc.
  backgroundDark: '#007bff', // Fundo principal da página (o seu azul)
  backgroundWhite: '#fff',   // Fundo branco para cards e container
  textDark: '#2d3748',     // Texto principal escuro (títulos)
  textMedium: '#4a5568',   // Texto de descrições e corpo
  textLight: '#718096',    // Texto sutil (informações, contadores)
  border: '#e0e0e0',      // Cor da borda padrão
  shadow: 'rgba(0, 0, 0, 0.1)', // Sombra padrão para elementos
  shadowHover: 'rgba(0, 0, 0, 0.08)', // Sombra mais pronunciada no hover
};

export const GlobalStyle = createGlobalStyle`
  :root {
    // Definindo as variáveis CSS globais
    --color-primary: ${colors.primary};
    --color-background-dark: ${colors.backgroundDark};
    --color-background-white: ${colors.backgroundWhite};
    --color-text-dark: ${colors.textDark};
    --color-text-medium: ${colors.textMedium};
    --color-text-light: ${colors.textLight};
    --color-border: ${colors.border};
    --shadow: ${colors.shadow};
    --shadow-hover: ${colors.shadowHover};
  }

  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--color-background-dark); /* Fundo azul do body */
    color: var(--color-text-medium); /* Cor de texto padrão */
    line-height: 1.6; /* Melhorar legibilidade de parágrafos */
  }

  /* Reset básico para elementos comuns para consistência visual */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-text-dark); /* Garante que os títulos usem a cor escura */
  }
`;

export const Container = styled.div`
  max-width: 1060px;
  min-height: 80vh;
  margin: 40px auto;
  padding: 30px;
  background-color: var(--color-background-white);
  border-radius: 12px;
  box-shadow: 0 8px 16px var(--shadow);

  @media (max-width: 1100px) {
    margin: 20px;
    padding: 20px;
  }
  @media (max-width: 768px) {
    margin: 15px;
    padding: 15px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

// O componente renomeado para evitar conflitos
export const GlobalGitHubBlogLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text-dark);
  font-weight: bold;
  margin-bottom: 20px;
  transition: color 0.3s ease;
  font-size: 1.1rem;

  svg {
    fill: var(--color-text-dark);
  }

  &:hover {
    color: var(--color-primary);
    svg {
      fill: var(--color-primary);
    }
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

export const StyledProfileImage = styled.img` 
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px var(--shadow);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center; 
  }
`;

export const Name = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.8rem;
  color: var(--color-text-dark);
`;

export const Description = styled.p`
  margin: 0 0 15px 0;
  color: var(--color-text-light);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
`;

export const ProfileLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: var(--color-text-medium);

  a, span {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
    white-space: nowrap;

    svg {
      fill: inherit;
    }

    &:hover {
      color: var(--color-primary);
      svg {
        fill: var(--color-primary);
      }
    }
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const PublicationsSection = styled.section`
  margin-top: 40px;
  padding-bottom: 40px;
`;

export const PublicationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const PublicationsTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--color-text-dark);
  margin: 0;
`;

export const PublicationsCount = styled.span`
  font-size: 1rem;
  color: var(--color-text-light);
`;

export const SearchInput = styled.input`
  width: 97%;
  padding: 12px 16px;
  margin-bottom: 25px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--color-text-dark);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const ArticleCard = styled.div`
  background-color: var(--color-background-white);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px var(--shadow);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px var(--shadow-hover);
  }
`;

export const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--color-text-dark);
  line-height: 1.3;
`;

export const ArticleDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-medium);
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1;
`;

export const ArticleInfo = styled.span`
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-top: auto;
`;