import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  position: relative;

  img {
    width: 50px;
    margin-left: 3em;
  }

  .left, 
  .right {
    display: flex;
    align-items: center;
  }
  
  .left {
    width: 50%;
    
    button {
      margin-left: 4em;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.grayishBlue};
  }
`;

export default Container;