import { React } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar">
            <LinkContainer to={process.env.PUBLIC_URL}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={process.env.PUBLIC_URL + "/shop"}>
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;