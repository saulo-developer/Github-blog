import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { PublicationsSection } from '../styles/styled-components';

interface PublicationDetails {
  id: number;
  title: string;
  body: string; // JSONPlaceholder usa 'body'
  userId?: number;
  date?: string;
}

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [publication, setPublication] = useState<PublicationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublicationDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = response.data;

        const formattedData: PublicationDetails = {
          id: data.id,
          title: data.title,
          body: data.body,
          date: new Date().toLocaleDateString('pt-BR')
        };

        setPublication(formattedData);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            console.error("Erro de resposta da API:", err.response.data);
            if (err.response.status === 404) {
              setError("Publicação não encontrada.");
            } else {
              setError(`Erro ao carregar publicação: ${err.response.status} - ${err.response.statusText}`);
            }
          } else if (err.request) {
            console.error("Nenhuma resposta recebida:", err.request);
            setError("Nenhuma resposta do servidor. Verifique sua conexão.");
          } else {
            console.error("Erro na configuração da requisição:", err.message);
            setError("Ocorreu um erro inesperado ao fazer a requisição.");
          }
        } else {
          console.error("Erro inesperado:", err);
          setError("Ocorreu um erro desconhecido.");
        }
        setPublication(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPublicationDetails();
    } else {
      setLoading(false);
      setPublication(null);
      setError("ID da publicação não fornecido na URL.");
    }
  }, [id]);

  if (loading) {
    return (
      <PublicationsSection>
        <h2>Carregando detalhes da publicação...</h2>
        <p>Aguarde um momento.</p>
      </PublicationsSection>
    );
  }

  if (error) {
    return (
      <PublicationsSection>
        <h2>Ocorreu um erro!</h2>
        <p>{error}</p>
        <Link to="/">Voltar para a lista de publicações</Link>
      </PublicationsSection>
    );
  }

  if (!publication) {
    return (
      <PublicationsSection>
        <h2>Publicação não encontrada.</h2>
        <p>A publicação com ID "{id}" não existe ou não foi carregada.</p>
        <Link to="/">Voltar para a lista de publicações</Link>
      </PublicationsSection>
    );
  }

  return (
    <PublicationsSection>
      <h3>{publication.title}</h3>
      <p>{publication.body}</p>
      {publication.date && <p>Publicado em: {publication.date}</p>}
      <Link to="/">Voltar para a lista de publicações</Link>
    </PublicationsSection>
  );
};

export default PublicationDetail;