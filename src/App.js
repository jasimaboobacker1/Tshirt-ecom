import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist'
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>

      <Header/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      </Routes>
    
  
    </>
  );
}

export default App;
