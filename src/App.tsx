import React from 'react';
import './styles/reset.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    const divStyle = {
        background: 'blue',
        height: '500px',
    };

  return (
    <>
      <Header />
        <div style={divStyle} />
      <Footer />
    </>
  );
}

export default App;
