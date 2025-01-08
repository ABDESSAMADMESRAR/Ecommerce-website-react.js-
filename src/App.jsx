import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy loading the components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Shop = lazy(() => import('./components/Shop'));
const Shoppingcart = lazy(() => import('./components/Shoppingcart'));
const Header = lazy(() => import('./components/Header'));
const Contactus = lazy(() => import('./components/Contactus'));
const Shopinfo = lazy(() => import('./components/Shopinfo'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className="loading-screen">Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact-us" element={<Contactus />} />
            <Route path="/ShoppingCart" element={<Shoppingcart />} />
            <Route path="/:idsh" element={<Shopinfo />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
