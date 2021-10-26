import styled from "styled-components";
import { ReactComponent as HeaderBackground } from '../images/bg-header-desktop.svg';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderBackground />

      <SearchBar />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: ${ props => props.theme.darkCyan };
  position: relative;
`;

const StyledHeaderBackground = styled(HeaderBackground)`
  width: 100%;
  height: 100%;
`;

export default Header;
