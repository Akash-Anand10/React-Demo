import { useEffect, useState } from "react";
import styled from "styled-components";
import { useThunkDispatch } from "../hooks";
import { addTicketToSection } from "../actions/boardActions";

const EditorContainer = styled.div<{ opacity: number }>`
  max-height: 70px;
  background-color: white;
  padding: 7px;
  margin: 6px;
  border-radius: 5px;
  opacity: ${({ opacity }) => opacity};
  transition: ${({ opacity }) => {
    if (opacity === 1) return `height linear 0.5s;`;
    if (opacity === 0) return `height linear 0.3s;`;
  }};
`;

const EditorTextBox = styled.input`
  height: 30px;
  border: unset;
  width: 100%;
  border-radius: 5px;
  padding: 0 5px;
  box-sizing: border-box;
`;

const AddSectionButton = styled.div`
  background-color: rgba(75, 191, 107, 1);
  border-radius: 5px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;
`;

const EditorClose = styled.div`
  text-align: center;
  padding-top: 3px;
  cursor: pointer;
`;

const AddTicket = ({ sectionId, setShowAddTicket }: EditSectionProps) => {
  const dispatch = useThunkDispatch();

  const onCloseHandler = () => {
    setOpacity(0);
    setTimeout(() => {
      setShowAddTicket(false);
    }, 300);
    console.log("closed");
  };

  const onSaveHandler = () => {
    let id = Date.now().toString();
    console.log("saved", ticketTitle);
    dispatch(
      addTicketToSection({
        sectionId: sectionId,
        ticketDetails: {
          id: id,
          title: ticketTitle,
        },
      })
    );
    setOpacity(0);
    setTimeout(() => {
      setShowAddTicket(false);
    }, 300);
  };

  const [ticketTitle, setticketTitle] = useState("");
  const [opacity, setOpacity] = useState(0);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setticketTitle(event.target.value);
  };

  useEffect(() => {
    console.log(ticketTitle);
  }, [ticketTitle]);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <EditorContainer opacity={opacity}>
      <div style={{ width: "100%", justifyContent: "left" }}>
        <EditorTextBox
          placeholder="Enter Ticket Title.."
          value={ticketTitle}
          onChange={onChangeHandler}
        ></EditorTextBox>
      </div>

      <div
        style={{
          display: "flex",
          paddingTop: "6px",
          justifyContent: "space-between",
        }}
      >
        <AddSectionButton onClick={onSaveHandler}>Add Ticket</AddSectionButton>
        <EditorClose onClick={onCloseHandler}>Close</EditorClose>
      </div>
    </EditorContainer>
  );
};

type EditSectionProps = {
  setShowAddTicket: Function;
  sectionId: string;
};
export default AddTicket;
