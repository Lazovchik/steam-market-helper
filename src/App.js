//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

//Components
import HeaderBar from './Components/HeaderBar'
import Footer from "./Components/Footer";
import AppBody from "./Components/AppBody";

function App() {
  return (
      <Container fluid style={{backgroundColor:'#5c5c5c', height:'100vh', padding:'0'}}>
        <HeaderBar></HeaderBar>
        <AppBody></AppBody>
        <Footer></Footer>
      </Container>
  );
}

export default App;
