import { useState } from "react";
import styled from "styled-components";
import { editTicketTitle} from "../actions/boardActions";
import { useDispatch } from "react-redux";

const EditorContainer = styled.div`
  min-height: 100px;
  max-height: 100px;
  background-color: white;
  padding: 7px;
  margin: 7px;
  border-radius: 5px;
`;

const EditorTextBox = styled.input`
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

const SaveButton = styled.div`
  width: 50px;
  background-color: rgba(75, 191, 107, 1);
  border-radius: 5px;
  text-align: center;
  padding: 3px;
  cursor: pointer;
`;

const EditorClose = styled.div`
  width: 25px;
  text-align: center;
  margin-left: 150px;
  padding-top: 3px;
  cursor: pointer;
`;


const EditTitle = ({setShowEditTicketTitle, taskId, content}: EditTitleProps) => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState(content);
  
  const onCloseHandler = () => {
    setShowEditTicketTitle(false);
    console.log("closed")
  }

  const onSaveHandler = () => {
    console.log("saved");
    dispatch(editTicketTitle({
      id: taskId,
      title: taskTitle
    }))
    setShowEditTicketTitle(false);
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  }

  return (
    <EditorContainer>
      <EditorTextBox 
        value={taskTitle}
        onChange={onChangeHandler}
        >
        </EditorTextBox>
      <div style={{
        display: "flex",
        paddingTop: "6px",
      }}>
        <SaveButton onClick={onSaveHandler}>Save</SaveButton>
        <EditorClose onClick={onCloseHandler}>Cancel</EditorClose>
      </div>
    </EditorContainer>
  );
};

type EditTitleProps = {
  setShowEditTicketTitle: Function,
  taskId: string,
  content: string,
};
export default EditTitle;
