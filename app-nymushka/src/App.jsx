import React from "react";
import './style/index.css'
import './style/container.css';
import Header from './Components/Title/Title';
import Main from "./Components/Main/Main";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className = "app">
        <div className = "inner-app">
          <div className = "Container">
            <Header/>
            <Main/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
