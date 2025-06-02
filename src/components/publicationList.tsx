import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link aqui
import {
  Grid,
  ArticleCard,
  ArticleTitle,
  ArticleDescription,
  ArticleInfo,
} from '../styles/styled-components'; // Assumindo que estes componentes estilizados estão neste arquivo

interface Publication {
  id: number;
  title: string;
  description: string;
  date: string;
}

// Componente para exibir a lista de publicações
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