import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import Captcha from './captcha/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/captcha' Component={Captcha} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
