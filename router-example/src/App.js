import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Home</h1>
    </div>
  );
}

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <p>{props.content}</p>
    </div>
  );
}

function NotFound() {
  return <h1>404</h1>
}

function Dog(props) {
  console.log(props);
  return <h1>{props.match.params.breed}</h1>;
}

function WrappedAbout(routerProps) {
  return <About {...routerProps} content="lorem ipsum" />
}

const breedList = [
  'Retriever',
  'Poodle',
  'Hound',
  'Bulldog'
];

function App() {
  const breedLinks = breedList.map((breed, idx) => {
    return <Link key={idx} to={`/dogs/${breed}`}>{breed}</Link>
  });

  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <hr />
        {breedLinks}

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/about" render={WrappedAbout} />
          <Route path="/dogs/:breed" component={Dog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
