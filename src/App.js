import { React } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
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
      <Switch>
        <Route exact path={process.env.PUBLIC_URL}>
          <Homepage />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/shop"}>
          <Shop />
        </Route>
        <Route exact path={"/"}>
          <Redirect to={process.env.PUBLIC_URL} />
        </Route>
        <Route path={"/"}>
          <Redirect to={process.env.PUBLIC_URL} />
        </Route>
        <Route path={"*"}>
          <Redirect to={process.env.PUBLIC_URL} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;