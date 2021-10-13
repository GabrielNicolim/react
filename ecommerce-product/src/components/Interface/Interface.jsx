import Count from '../Count/Count';
import Container from './style';
import Cart from '../Cart/icon-cart';
import { useContext, useState } from 'react';
import { CartContext } from '../../providers/cartProvider';

const Interface = () => {
  const { setQuantity } = useContext(CartContext);
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

  return (
    <Container>
      <Count counter={ counter } changeCounterValue={ changeCounterValue } />
      <button id='primary-button' onClick={ () => setQuantity(counter) } >
        <Cart fill='#FFF' />
        <span>Add to Cart</span>
      </button>
    </Container>
  );
}

export default Interface;