import "./App.css";
import { Switch, Route } from "react-router-dom";
import KBoard from "./pages/KBoard";
import TaskScreen from "./pages/TaskScreen";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const handleCancel = () => {
    console.log("modal closed.")
  }
  const handleOk = () => {
    console.log("modal Accepted.")
  }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <KBoard />
        </Route>
        
        <Route path="/task/:id" children={<TaskScreen />} />
        <Route path="/modal">
          <Modal handleCancel={handleCancel} handleOk={handleOk} TextContent={"My modal"}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
