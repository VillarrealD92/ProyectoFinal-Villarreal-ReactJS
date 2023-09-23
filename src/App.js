import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from './context/CartContext';
import Router from './router/Router';

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
