import React from 'react';
import PublicationsList from './components/PublicationsList';
import AppHeader from './components/AppHeader'


function App() {
  return (
    <div className="container">
      <AppHeader />
      <PublicationsList />
    </div>
  );
}

export default App;
