import React from 'react';
import { List, Typography, Button, Box } from '@mui/material';
import {useCart} from '../components/CartContext'
import { useNavigate } from 'react-router-dom';
import CheckoutCard from '../components/CheckoutCard';

function Checkout() {
  const {cartItems, removeFromCart, totalPrice, clearCart} = useCart(); 
 
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  const handleRemoveFromCart = (product) => {
    console.log("inside handle remove from cart", product)
    console.log("inside handle remove from cart", product.id)
    removeFromCart(product.id)
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <CheckoutCard key={index} product = {item} onRemoveFromCart={handleRemoveFromCart} />
        ))}
      </List>
      <Typography variant="h5" >
        Total Price : ${totalPrice}
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleProceedToPayment}>
          Proceed to Payment
        </Button>
        <Button variant = "contained" color="primary" onClick = {clearCart}>
            Clear Cart 
        </Button>
      </Box>
    </div>
  );
}

export default Checkout;
