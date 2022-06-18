import React from "react";
import './style/index.css'
import './style/container.css';
import Header from './Components/Title/Title';
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <div className = "app">
        <Header/>
        <Main/>
      </div>
    </>
  );
}

export default App;
