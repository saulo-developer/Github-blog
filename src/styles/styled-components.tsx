
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f5f7;
    color: #333;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
`;

export const GitHubBlogLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  svg {
    fill: #333;
  }

  &:hover {
    color: #007bff;
    svg {
      fill: #007bff;
    }
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.8rem;
  color: #2d3748;
`;

export const Description = styled.p`
  margin: 0 0 15px 0;
  color: #718096;
  font-size: 1rem;
  line-height: 1.6;
`;

export const ProfileLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: #4a5568;

  a, span {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;

    svg {
      fill: inherit;
    }

    &:hover {
      color: #007bff;
      svg {
        fill: #007bff;
      }
    }
  }
`;

export const PublicationsSection = styled.section`
  margin-top: 40px;
`;

export const PublicationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PublicationsTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0;
`;

export const PublicationsCount = styled.span`
  font-size: 1rem;
  color: #718096;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  color: #4a5568;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

export const ArticleCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 10px;
  color: #2d3748;
`;

export const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 15px;
`;

export const ArticleInfo = styled.span`
  font-size: 0.9rem;
  color: #718096;
`;