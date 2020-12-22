//import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from "react-bootstrap";

//Components
import HeaderBar from './Components/HeaderBar'

function App() {
  return (
      <Container fluid style={{backgroundColor:'#5c5c5c', height:'100vh', padding:'0'}}>
        <HeaderBar></HeaderBar>
      </Container>
  );
}

export default App;
