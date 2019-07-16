import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import {Container,
  //  Row, Col
  } from "./components/Grid"; 

function App() {
  return(
  <Router>
    <Container>
      <Nav />
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Saved} />
        <Route exact path="/books/:id" component={Search} />
        <Route component={NoMatch} />
        </Switch>
    </Container>
  </Router>
  )
}
export default App;