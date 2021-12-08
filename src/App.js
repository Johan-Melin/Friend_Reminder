import React, { useEffect } from 'react';
import FriendsLister from './components/FriendsLister'

function App() {
  useEffect(() => {    
    document.title = `Friend Reminder`; 
  });

  return (
    <FriendsLister />
  );
}

export default App;
