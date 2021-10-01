import React from 'react';
import { ShareButton } from './components/ShareButton/ShareButton';

function App() {
  return (
    <div className="App">
      <ShareButton allow={['twitter', 'facebook', 'whatsapp', 'print', 'pinterest']} />
    </div>
  );
}

export default App;
