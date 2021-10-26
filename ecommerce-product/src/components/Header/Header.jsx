import Container from './style';
import Button from '../Button/Button';
import { ReactComponent as Logo } from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import Cart from '../Cart/Cart';
import { useCart } from '../../providers/cartProvider';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { useState } from 'react';
import Close from '../Close/Close';

const Header = () => {
  const cart = useCart();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <div className='left'>

          <MenuIcon 
            onClick={ () => setMenuIsOpen(!menuIsOpen) } 
            className='sandwich'
          />

        { menuIsOpen && 
          <div className='shadow'>
            <div className='menu-responsive'>
              <span 
                className='close' 
                onClick={ () => setMenuIsOpen(!menuIsOpen) }
              >
                <Close />
              </span>
              
              <Button content='Collections' />
              <Button content='Men' />
              <Button content='Women' />
              <Button content='About' />
              <Button content='Contact' />
            </div>
          </div>
        }

        <Logo />

        <div className='menu'>
          <Button content='Collections' />
          <Button content='Men' />
          <Button content='Women' />
          <Button content='About' />
          <Button content='Contact' />
        </div>
      </div>
      
      <div className='right'>
        <Cart fill='#000' quantity={ cart.quantity } />
        <img src={ avatar } alt='avatar' className='avatar' />       
      </div>
    </Container>
  )
}

export default Header;