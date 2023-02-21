import './App.css';
import Navbar from './components/Navbar/Navbar';
import Presentation from './components/Presentation/Presentation';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
            <Presentation/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Productos de TangoGrill"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/> 
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
