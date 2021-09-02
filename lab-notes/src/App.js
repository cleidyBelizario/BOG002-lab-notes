import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UsuarioGoogle from './componentes/loginGoogle';
import Login from './componentes/loginFire';
import CrearNotas from './componentes/notas';


function App() {

  return (
    <Router>
      <div className="App">
        <Link to="/" className="inicio_link">
          Inicio
          <br />
        </Link>
        <Link to="/notas" className="notas_link">
          Notas
        </Link>
      </div>
      <hr />
      <Switch>
        <Route path="/notas">
          <CrearNotas />
        </Route>
        <Route path="/home">
          <h1>hola soy el home </h1>
        </Route>
        <Route path="/iniciarSesion">
          <h1>hola soy el home </h1>
        </Route>
        <Route path="/">
          <Login />
          <UsuarioGoogle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
