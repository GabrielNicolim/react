import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  #primary-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    background: ${ props => props.theme.orange };
    border: none;
    color: ${ props => props.theme.white };
    font-weight: 700;
    font-size: 1.1em;
    border-radius: 8px;
    padding: 1em;
    cursor: pointer;

    &:hover {
      background: ${ props => props.theme.paleOrange };
    }

    span {
      margin-left: 10px;
    }
  }
`;

export default Container;
