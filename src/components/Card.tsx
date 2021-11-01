import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";
import { removeTicketFromSection } from "../actions/boardActions";
import { useDispatch } from "react-redux";
// import {removeTicketFromSection} from "../actions/boardActions"

const CardContainer = styled.div`
  height: 70px;
  min-height: 100px;
  max-height: 100px;
  background-color: white;
  margin: 7px;
  margin-bottom: 6px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CardContent = styled.div`
  padding: 7px;
`;

const CardMenu = styled.div`
  background-color: rgba(197, 221, 191, 0.7);
  height: 24px;
  padding-right: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

type menuProps = {
  onDeleteHandler: MouseEventHandler<HTMLDivElement>;
};

// This is the Ellipses menu on top of the Task card. Currently we are using it on;y to delete.
const Menu = ({ onDeleteHandler }: menuProps) => {
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={onDeleteHandler}
    >
      <FontAwesomeIcon icon={faTimesCircle} size="sm" />
    </div>
  );
};

const Card = ({ index, ticketId, content, sectionId }: CardProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function onEditHandler() {
    console.log("selected ticket id: ", ticketId);
    history.push(`/task/${ticketId}`);
  }

  const onDeleteHandler = () => {
    console.log("deleted", ticketId);
    dispatch(
      removeTicketFromSection({
        sectionId: sectionId,
        ticketDetails: {
          id: ticketId,
        },
      })
    );
  };

  return (
    <Draggable draggableId={ticketId} index={index} key={ticketId}>
      {(provided) => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardMenu>
            <Menu onDeleteHandler={onDeleteHandler} />
          </CardMenu>
          <div style={{height: '100%'}} onClick={onEditHandler}>
            <CardContent>{content}</CardContent>
          </div>
        </CardContainer>
      )}
    </Draggable>
  );
};

type CardProps = {
  index: number;
  content: string;
  ticketId: string;
  sectionId: string;
};
export default Card;
