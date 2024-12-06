import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './Home.tsx';
import MainApp from './mainapp/index.tsx';
import Captcha from './captcha/index.tsx';



import "./assets/fonts/UniHeavy.otf";
import './index.css';



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={App} />
      <Route path='/main' Component={MainApp} />
      <Route path='/captcha' Component={Captcha} />
    </Routes>
  </BrowserRouter>
);
