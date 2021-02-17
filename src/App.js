import { BrowserRouter, Switch, Route } from "react-router-dom";
import Show from "./show";
import Demo from "./demo";
import "./App.css";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Demo} />
          <Route path="/fruits/:id" component={Show} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
