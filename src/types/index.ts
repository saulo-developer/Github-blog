

// Esta é a definição ÚNICA e CENTRAL da sua interface Publication.
// Ela reflete a estrutura de dados que você recebe da API do JSONPlaceholder ('body').
export interface Publication {
  userId: number;
  id: number;
  title: string;
  body: string;
  date?: string;
  description?: string;
}

// Se você tiver outras interfaces para detalhes, defina-as aqui também, estendendo Publication se apropriado.
export type PublicationDetails = Publication