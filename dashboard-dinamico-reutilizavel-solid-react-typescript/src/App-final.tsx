import React from 'react';
import {Dashboard} from 'src/components/Dashboard-final/Dashboard';
import { widgets } from 'src/mocks-final/dashboard.data';

import './styles/main.scss';

const App = () => {
	return (
		<div className="App">
			<Dashboard title="My Awesome SOLID Dashboard"  widgets={widgets} />
		</div>
	);
};

export default App;
