import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from "./componentes/Banner/Banner";
import CampoTexto from "./componentes/CampoTexto";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Banner />
      <CampoTexto />
  </React.StrictMode>
);


