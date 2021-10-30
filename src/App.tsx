import "./App.css";
import { Switch, Route } from "react-router-dom";
import KBoard from "./pages/KBoard";
import TaskScreen from "./pages/TaskScreen";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/board">
          <KBoard />
        </Route>
        
        <Route path="/task/:id">
          <TaskScreen/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
