import React from 'react';
import {ShareButtonChildProps} from '../share-button.model';

export const PrintButton = ({onClick, className}: ShareButtonChildProps) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fas fa-print">Print</i>
		</button>
	);
};
