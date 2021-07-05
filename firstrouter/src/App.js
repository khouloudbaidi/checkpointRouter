import "./App.css";
import About from "./Componenet/About";
import Home from "./Componenet/Home";
import NavBar from "./Componenet/NavBar";
import Products from "./Componenet/Products";
import { Switch, Route } from "react-router-dom";
import Error from "./Componenet/Error";
import Product from "./Componenet/Product";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}
export default App;
