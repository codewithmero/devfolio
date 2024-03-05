import React from 'react';
import "./App.css";
import Header from './components/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className="container">
      <Header />
        <Main />
      <Footer />
    </div>
  );
}

export default App;