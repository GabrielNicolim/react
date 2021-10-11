import Container from "./style";
import Interface from "../Interface/Interface";

import mainImage from '../../images/image-product-1.jpg'
const ProductPage = () => {
  return (
    <Container>
      <div className='left'>
        <img src={ mainImage } id='main-image' alt='product' />
      </div>

      <div className='right'>
        <h3>Sneaker Company</h3>

        <h2>Fall Limited Edition Sneakers</h2>

        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      
        <div className='price'>
          <span className='value'>$125.50</span> 
          <span className='discount'>50%</span> 
        </div>

        <div className='old-price'>$250.00</div>

        <Interface />    
      </div>
    </Container>
  );
}

export default ProductPage;