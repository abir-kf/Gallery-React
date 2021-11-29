import React from 'react';
import './App.css';
import Counter from './components/counter';
import Gallery from './components/Gallery';
import About from "./components/About";
import NextImage from "./components/NextImage";
import HitDetails from "./components/HitDetails";
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2">
        <ul className="navbar-nav">
          <li>
          <Link className="nav-link" to="/home">Home</Link>
          </li>
         <li>
          <Link className="nav-link" to="/counter">Counter</Link>
         </li>
         <li>
          <Link className="nav-link" to="/about">About</Link>
          </li>
         <li>
          <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
        </ul>  
      </nav>
      <div className="m-4">
        <Switch>
          <Route exact path="/home"></Route>
          <Route exact path="/counter" component={Counter}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/HitDetails/:id?/:word?/:index0?" component={HitDetails}></Route>
          <Route path="/NextImage/:id?/:word?/:index0?" component={NextImage}></Route>
        </Switch>
      </div>
    </Router>
   /* <div className="m-3">
     <Counter title="Counter 1" value={1} image="images/profil.jpg"></Counter>
     <Counter title="Counter 2" value={2} image="images/v.jpg"></Counter>
    </div>*/
  );
}

export default App;
