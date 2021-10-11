import Container from './style';

const Count = ({ counter, changeCounterValue }) => {
  return (
    <Container>
      <button onClick={() => changeCounterValue(counter, 'REMOVE')}>-</button>
      <span> { counter } </span>
      <button onClick={() => changeCounterValue(counter, 'ADD')}>+</button>
    </Container>
  );
}

export default Count;
