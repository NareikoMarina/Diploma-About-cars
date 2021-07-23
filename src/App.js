import "./App.css";
import CarBrand from "./components/CarBrand";
import { Switch, Route, Redirect } from "react-router-dom";
import CarModel from "./components/CarModel";
import CarSpec from "./components/CarSpec";
import ShowFavorites from "./components/ShowFavorites";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={CarBrand} exact />
        <Route path="/favorites" render={() => <ShowFavorites />} exact />
        <Route path="/:brand" component={CarModel} exact />
        <Route path="/:brand/:model" component={CarSpec} exact />
      </Switch>
    </div>
  );
}

export default App;
