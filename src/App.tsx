import "./App.css";
import { Switch, Route } from "react-router-dom";
import KBoard from "./pages/KBoard";
import TaskScreen from "./pages/TaskScreen";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <KBoard />
        </Route>
        
        <Route path="/task/:id" children={<TaskScreen/>}/>
      </Switch>
    </div>
  );
}

export default App;
