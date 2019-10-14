import React from 'react';
import NoteContextProvider from './contexts/NoteContext';
import Navbar from './components/Navbar';
import WorkSpace from './components/WorkSpace';

function App() {
  return (
    <div className="App">
      <NoteContextProvider>
      <Navbar/>
      <WorkSpace/>
      </NoteContextProvider>
    </div>
  );
}

export default App;
