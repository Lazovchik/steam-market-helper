import './App.css';

//Bootstrap
import {Container} from "react-bootstrap";

//Components
import HeaderBar from './Components/HeaderBar'

function App() {
  return (
    <div className="App">
      <Container>
        <HeaderBar></HeaderBar>
      </Container>
    </div>
  );
}

export default App;
