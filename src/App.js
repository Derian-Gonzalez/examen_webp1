import React from 'react';
import './App.css';
import Header from './components/Header';
import Partial1 from './components/Partial1';
import DownloadCenter from './components/DownloadCenter';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Partial1 />
        <DownloadCenter />
      </main>
    </div>
  );
}

export default App;