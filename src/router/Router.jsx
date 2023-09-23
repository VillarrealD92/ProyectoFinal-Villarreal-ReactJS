import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '../App.css';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import Order from '../components/Order';

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/servicio/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}