import styled from "styled-components";
import { useCard } from '../context/cardContext';

const SearchBar = () => {
  const { searchValue, search } = useCard();

  return (
    <Container>
      <input type='text' value={searchValue} onChange={ (e) => search(e.target.value) } />
    </Container>
  )
}

const Container = styled.div`
  width: 60%;
  height: 4em;
  position: absolute;
  bottom: -2em;
  left: 20%;

  input {
    width: 100%;
    height: 100%;
    padding: 0 30px;
    border: 0;
    font-size: 1.2em;
    box-shadow: 2px 2px 10px ${ props => props.theme.darkGrayishCyan };
    border-radius: 8em;
  }
`;

export default SearchBar;
