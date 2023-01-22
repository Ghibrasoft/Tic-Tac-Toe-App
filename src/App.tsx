import Container from 'react-bootstrap/esm/Container';
import Board from './components/Board';

function App() {
  return (
    <>
      <Container 
      className='
      bg-secondary-subtle 
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center
      ' 
      style={{height: '100vh'}}>
        <h1>Tic-Tac-Toe Game</h1>
        <Board />
      </Container>
    </>
  );
}

export default App;
