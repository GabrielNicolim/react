import styled from "styled-components";

const Container = styled.div`
  background: ${ props => props.theme.lightGrayishBlue };
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  width: 35%;

  button {  
    color: ${ props => props.theme.orange };
    border: none;
    background: none;
    cursor: pointer;
    font-size: 2em;
    width: 50px;
    height: 50px;
    font-weight: 700;

    &:hover {
      opacity: .5;
    }
  }

  span {
    text-align: center;
    font-weight: 700;
  }
`;

export default Container;
