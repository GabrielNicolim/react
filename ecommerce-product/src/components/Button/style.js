import styled from 'styled-components';

const Container = styled.button`
  color: ${ props => props.theme.darkGrayishBlue };
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  
  &:hover {
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
`;

export default Container;