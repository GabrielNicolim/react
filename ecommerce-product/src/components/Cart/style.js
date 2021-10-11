import styled from "styled-components";

const Container = styled.div`
  position: relative;
  cursor: pointer;

  .counter {
    background: ${ props => props.theme.orange };
    color: ${ props => props.theme.white };
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 8px;
    font-size: 12px;
    position: relative;
    top: -15px;
    right: 10px;
  }
`;

export default Container;
