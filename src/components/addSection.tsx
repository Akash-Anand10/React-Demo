import { useEffect, useState } from "react";
import styled from "styled-components";
import { addSection} from "../actions/boardActions";
import { useDispatch } from "react-redux";

const EditorContainer = styled.div`
  height: 70px;
  max-height: 70px;

  background-color: white;
  padding: 7px;
  margin: 6px;
  border-radius: 5px;
`;

const EditorTextBox = styled.input`
  height: 30px;
  width: 286px;
  border: 1px solid black;
  border-radius: 3px;
  padding-left: 5px;
  padding-right: 5px;
`;

const AddSectionButton = styled.div`
  width: 100px;
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

const EditSection = ({setShowEditSection}: EditSectionProps) => {
  const dispatch = useDispatch();
  
  const onCloseHandler = () => {
    setShowEditSection(false);
    console.log("closed")
  }

  const onSaveHandler = () => {
    console.log("saved");
    dispatch(addSection({
      sectionId: Date.now().toString(),
      sectionTitle: sectionName
    }))
    setShowEditSection(false);
  }

  const [sectionName, setSectionName] = useState("");
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionName(event.target.value);
  }

  useEffect(()=>{
    console.log(sectionName)
  },[sectionName])

  return (
    <EditorContainer>
      <EditorTextBox 
        placeholder="Enter Section Name.."
        value={sectionName}
        onChange={onChangeHandler}
        >
        </EditorTextBox>
      <div style={{
        display: "flex",
        paddingTop: "6px",
      }}>
        <AddSectionButton onClick={onSaveHandler}>Add Section</AddSectionButton>
        <EditorClose onClick={onCloseHandler}>Close</EditorClose>
      </div>
    </EditorContainer>
  );
};

type EditSectionProps = {
  setShowEditSection: Function
};
export default EditSection;
