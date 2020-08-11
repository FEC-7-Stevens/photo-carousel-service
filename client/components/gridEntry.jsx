import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BigImage = styled.img`
max-width: 100%;
grid-row-end: span 2;
margin: auto;
grid-column-end: span 2;
transition: transform .2s;
overflow: hidden;
&:hover{
  transform: scale(1.02);
  cursor: pointer;
}
`;

const SmallImage = styled.img`
max-width: 99%;
margin: auto;
transition: transform .2s;
overflow: hidden;
&:hover{
  transform: scale(1.02);
  cursor: pointer;
}
`;

const GridEntry = (props) => {
  if (props.photo.Image_id % 3 === 1) {
    return <BigImage src={props.photo.Image_url}
      onClick={() => { props.openCarousel(props.photo.Image_id); }}
    />;
  }
  return <SmallImage src={props.photo.Image_url}
    onClick={() => { props.openCarousel(props.photo.Image_id); }}
  />;
};

GridEntry.propTypes = {
  photo: PropTypes.object.isRequired,
  openCarousel: PropTypes.func.isrequired,
};

export default GridEntry;
