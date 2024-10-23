import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewCollections from './components/NewCollections/NewCollections.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <NewCollections></NewCollections>
      </BrowserRouter>
    </div>
  );
}

export default App;
