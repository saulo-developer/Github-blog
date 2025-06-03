import React from 'react';
import { StyledImage } from '../styles/styled-components'; // Adjust path if necessary

function ProfileImageOne(props) {
  return (
    <a href={props.link}>
      <StyledImage src={props.src} alt={props.alt} /> {/* CORRECTED: Now using props.src */}
    </a>
  );
}

export default ProfileImageOne;