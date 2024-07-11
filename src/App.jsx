import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Shoppingcart from './components/Shoppingcart';
import Header from './components/Header';
import Contactus from './components/Contactus';
import Shopinfo from './components/Shopinfo';


function App() {

  return (
    <>
<BrowserRouter>
<Header></Header>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact-us" element={<Contactus />} />
          <Route path="/ShoppingCart" element={<Shoppingcart/>} />
          <Route path="/:idsh" element={<Shopinfo />} />
        </Routes>
</BrowserRouter> 
    </>
  )
}

export default App
