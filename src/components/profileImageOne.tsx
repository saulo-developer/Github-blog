import React from 'react';

function profileImageOne(props) {
  return (
    <a href={props.link}>
      <img src={props.img} alt={props.alt} />
    </a>
  );
}

export default profileImageOne;