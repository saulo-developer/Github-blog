import React from 'react';
import { StyledImage } from '../styles/styled-components'; // Ajuste o caminho para o seu arquivo de estilos

function profileImageOne(props) {
  return (
    <a href={props.link}>
   
      <StyledImage src={props.img} alt={props.alt} />
    </a>
  );
}

export default profileImageOne;