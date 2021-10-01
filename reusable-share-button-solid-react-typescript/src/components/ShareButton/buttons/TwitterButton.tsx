import React from 'react'
import { ShareButtonChildProps } from '../share-button.model'

export const TwitterButton = ({ onClick, className }: ShareButtonChildProps) => {
  return (
    <button onClick={ onClick } className={ className }>
      <i className="fab fa-twitter">Twitter</i>
    </button>
  )
}
