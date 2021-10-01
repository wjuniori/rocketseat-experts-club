import React from 'react'
import { ShareButtonChildProps } from '../share-button.model'

export const FacebookButton = ({ onClick, className }: ShareButtonChildProps) => {
  return (
    <button onClick={ onClick } className={ className }>
      <i className="fab fa-facebook">Facebook</i>
    </button>
  );
};
