import { useParams } from "react-router-dom";

export default function TaskScreen() {
  type Params = {
    id: string
  }
  let {id}: Params = useParams();
  console.log(id);
  return (
    <div>
      <h3>
        This is the task details screen of task id: {id}
      </h3>
    </div>
  );
}
