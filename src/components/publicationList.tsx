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
        // Envolva o ArticleCard inteiro no Link
        // Adicione style={{ textDecoration: 'none', color: 'inherit' }}
        // para remover o sublinhado padrão do link e herdar a cor do texto
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

export default PublicationList; // Boa prática exportar como default, se for o único export do arquivo