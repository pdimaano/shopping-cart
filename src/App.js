import { React } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";

const App = () => {
  return (
    <HashRouter>
      <Navbar bg="light" variant="light" style={{}} expand="lg">
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
        <Route exact path={process.env.PUBLIC_URL}>
          <Homepage />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/shop"}>
          <Shop />
        </Route>
        <Route exact path={"/"}>
          <Navigate to={process.env.PUBLIC_URL} />
        </Route>
        <Route path={"/"}>
          <Navigate to={process.env.PUBLIC_URL} />
        </Route>
        <Route path={"*"}>
          <Navigate to={process.env.PUBLIC_URL} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;