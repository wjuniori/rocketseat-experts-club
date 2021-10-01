import React from 'react';
import {ShareButtonChildProps} from '../share-button.model';

export const WhatsAppButton = ({onClick, className}: ShareButtonChildProps) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fab fa-whatsapp">WhatsApp</i>
		</button>
	);
};
