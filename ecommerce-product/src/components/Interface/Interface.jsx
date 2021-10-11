import Count from '../Count/Count';
import Container from './style';
import Cart from '../Cart/icon-cart';
import { useState } from 'react';
import { useCart } from '../../providers/cartProvider';

const Interface = () => {
  const { setCart } = useCart();
  const [counter, setCounter] = useState(0);
  
  function changeCounterValue (state, type) {
    switch(type) {
      case 'ADD':
        setCounter(state + 1);
        break;
      case 'REMOVE':
        if(state > 0) setCounter(state - 1);
      break;
      default:
        return;
    }
  }

  const handleSet = () => {
    const quantity = { quantity: counter }; 
    setCart(quantity);
  }

  return (
    <Container>
      <Count counter={ counter } changeCounterValue={ changeCounterValue } />
      <button id='primary-button' onClick={handleSet}>
        <Cart fill='#FFF' />
        <span>Add to Cart</span>
      </button>
    </Container>
  );
}

export default Interface;