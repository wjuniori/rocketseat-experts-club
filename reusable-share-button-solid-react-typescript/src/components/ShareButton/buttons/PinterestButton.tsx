import React from 'react';
import {ShareButtonChildProps} from '../share-button.model';

export const PinterestButton = ({onClick, className}: ShareButtonChildProps) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fab fa-pinterest-p">Pinterest</i>
		</button>
	);
};
