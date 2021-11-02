import { useState } from "react";
import { editTicketTitle } from "../actions/boardActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


type TaskFormProps = {
  id: string
}
export default function TaskForm({ id }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitted : ${title}`);
    dispatch(editTicketTitle({
      id: id,
      title: title
    }));
    history.push(`/`);
  }
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  

  return (
    <div>
      <h3>
        This is the task details screen of task id: {id}
      </h3>
      <form onSubmit={handleSubmit}>
      <label>
        Task Tile:
        <input type="text" value={title} onChange={onChangeHandler} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}