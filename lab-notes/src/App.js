import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Easy - Notes</h1>
      </div>
      <hr />
      <Switch>
        <Route path ="/notas">
          esta es la pagina de crear notas 
        </Route>
        <Route path="/crear">
        Esta es la pagina para poder crear notas. 
        </Route>
        <Route path="/prueba">
          prueba 1
        </Route>
        <Route path="/">
          Pagina de inicio 
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
