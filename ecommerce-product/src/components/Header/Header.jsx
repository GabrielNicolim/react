import Container from './style';
import Button from '../Button/Button';
import { ReactComponent as Logo } from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import Cart from '../Cart/icon-cart';
import { useCart } from '../../providers/cartProvider';

const Header = () => {
  const cart = useCart();

  return (
    <Container>
      <div className='left'>
        <Logo />

        <Button content='Collections' />
        <Button content='Men' />
        <Button content='Women' />
        <Button content='About' />
        <Button content='Contact' />
      </div>
      
      <div className='right'>
        <Cart fill='#000' quantity={ cart.quantity } />
        <img src={avatar} alt='avatar' />       
      </div>
    </Container>
  )
}

export default Header;