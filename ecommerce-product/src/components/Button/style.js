import styled from 'styled-components';

const Container = styled.button`
  color: ${ props => props.theme.darkGrayishBlue };
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  
  &:hover {
    color: ${ props => props.theme.black };
    
    &::after {
      content: '';
      background: ${ props => props.theme.orange };
      width: 100%;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: -48px;
    }
  }

  @media only screen and (max-width: 1030px) {
    text-align: left;
    font-weight: 700;
    margin-top: 1em;
    font-size: 1.3em;
    color: ${ props => props.theme.black };
   
    &:hover {
      &::after {
        content: '';
        background: none;
      }
    }
  }
`;

export default Container;