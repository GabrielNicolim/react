import { useState } from 'react';
import Container from './style';

// Uga Buga
import image1 from '../../images/image-product-1.jpg';
import image2 from '../../images/image-product-2.jpg';
import image3 from '../../images/image-product-3.jpg';
import image4 from '../../images/image-product-4.jpg';

import image1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
import image2Thumbnail from '../../images/image-product-2-thumbnail.jpg';
import image3Thumbnail from '../../images/image-product-3-thumbnail.jpg';
import image4Thumbnail from '../../images/image-product-4-thumbnail.jpg';

import Close from '../Close/Close';

const Tumbnail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const images = [
    image1,
    image2,
    image3,
    image4
  ]

  const imagesThumb = [
    image1Thumbnail,
    image2Thumbnail,
    image3Thumbnail,
    image4Thumbnail
  ]

  return (
    <Container>
      <img 
        src={ images[selectedImage] } 
        className='main-image' 
        alt='product' 
        onClick={ () => setModalIsOpen(!modalIsOpen) }
      />

      {
        modalIsOpen && 
        <div className='shadow'>
          <div className='modal'>
          <div className='top'>
            <span 
              className='close'
              onClick={ () => setModalIsOpen(!modalIsOpen) }
            >
              <Close fill='hsl(26, 100%, 55%)' />
            </span>
          </div>

            <div className='content'>
              <img 
                src={ images[selectedImage] } 
                className='main-image' 
                alt='product' 
              />

              <div className='tumb'>
                {
                  imagesThumb.map((element, index) => {
                    return (
                      <img 
                        src={element} 
                        key={index} 
                        className={index === selectedImage ? 'selected' : ''} 
                        onClick={ () => setSelectedImage(index) }
                        alt='product'
                      />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      }

      <div className='tumb'>
        {
          imagesThumb.map((element, index) => {
            return (
              <img 
                src={element} 
                key={index} 
                className={index === selectedImage ? 'selected' : ''} 
                onClick={ () => setSelectedImage(index) }
                alt='product'
              />
            );
          })
        }
      </div>
    </Container>
  );
}

export default Tumbnail;