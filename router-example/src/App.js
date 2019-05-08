import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function Home(props) {
  console.log(props);
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return <h1>About</h1>
}

function NotFound() {
  return <h1>404</h1>
}

function Dog(props) {
  console.log(props.match.params);
  return <h1>Dog</h1>;
}

function App() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dogs/:breed" component={Dog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
