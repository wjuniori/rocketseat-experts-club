import React from 'react';
import { templateComponents } from 'src/components/Dashboard-final/dashboard.config';
import { Widgets } from 'src/components/Dashboard-final/dashboard.model';
// import {Chart, Layer, Bars, Ticks} from 'rumble-charts';

export interface WidgetProps {
	content: Widgets;
	className?: string;
}

export const Widget = ({content, className}: WidgetProps) => {
  const WidgetComponent = templateComponents[content.config.template];
  const customClass = className && `${className} `;
  const position = content.config.position.toLowerCase();

	return (
		<div className={`${customClass}widget widget--${position}`}>
			<WidgetComponent content={content} />
		</div>
	);
};
