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
   body: string;
}


const PublicationList: React.FC<{ publications: Publication[] }> = ({ publications }) => {
  return (
    <Grid>
      {publications.map((publication) => (
        <Link to={`/publication/${publication.id}`} key={publication.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ArticleCard>
            <ArticleTitle>{publication.title}</ArticleTitle>
            <ArticleDescription>
           
              {(publication.body || '').substring(0, 150)}...
            </ArticleDescription>
            <ArticleInfo>{publication.date || 'Data Indisponível'}</ArticleInfo>
          </ArticleCard>
        </Link>
      ))}
    </Grid>
  );
};


export default PublicationList;