import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { RestaurantProvider } from "./context/RestaurantContext";
import Home from "./components/Home";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const toggleCart = () => setShowCart(!showCart);


  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      return existingItem 
        ? prevCart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <RestaurantProvider>
      <Router>
        <Header toggleCart={toggleCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          showCart={showCart}
          closeCart={() => setShowCart(false)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/restaurant/:id" 
            element={<RestaurantDetail addToCart={addToCart} />} 
          />
        </Routes>
      </Router>
    </RestaurantProvider>
  );
}

export default App;