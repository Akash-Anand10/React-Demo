import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function TaskScreen() {
  type Params = {
    id: string
  }
  let {id}: Params = useParams();
  console.log(id);
  return (
    <TaskForm id={id}/>
  );
}
