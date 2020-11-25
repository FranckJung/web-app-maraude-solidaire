import { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contact from "./Contact";

class App extends Component {
  render(){
    return (
      <HashRouter>
      <nav>
        <NavLink to="/">Logo</NavLink>
        <ul>
          <li>
            <NavLink to="#">L'association</NavLink>
          </li>
          <li>
            <NavLink to="#">pas d'idées</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      </HashRouter>
    );
  }
}

export default App;
