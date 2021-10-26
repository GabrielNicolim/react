import styled from "styled-components";

const Container = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  );
}

const StyledContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4em 20vw;
  background: ${ props => props.theme.lightCyan };
`;

export default Container;
