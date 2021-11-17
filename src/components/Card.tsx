import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler, useState } from "react";
import {
  setModalDetails,
} from "../actions/boardActions";
import { useDispatch } from "react-redux";
import EditTitle from "./EditTitle";

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
  align-content: center;
  align-items: center;
  justify-content: flex-end;
`;

type deleteProps = {
  onDeleteHandler: MouseEventHandler<HTMLDivElement>;
};
type EditProps = {
  onEditHandler: MouseEventHandler<HTMLDivElement>;
};

const DeleteIcon = ({ onDeleteHandler }: deleteProps) => {
  return (
    <div
      style={{
        cursor: "pointer",
        paddingLeft: "5px",
      }}
      onClick={onDeleteHandler}
    >
      <FontAwesomeIcon icon={faTimesCircle} size="sm" />
    </div>
  );
};

const EditIcon = ({ onEditHandler }: EditProps) => {
  return (
    <div
      style={{
        cursor: "pointer",
        paddingLeft: "5px",
      }}
      onClick={onEditHandler}
    >
      <FontAwesomeIcon icon={faEdit} size="sm" />
    </div>
  );
};

const Card = ({
  index,
  ticketId,
  content,
  sectionId,
}: CardProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showEditTicketTitle, setShowEditTicketTitle] = useState(false);

  function onEditHandler() {
    console.log("selected ticket id: ", ticketId);
    history.push(`/task/${ticketId}`);
  }

  function onEditHandler2() {
    console.log("selected ticket id: ", ticketId);
    setShowEditTicketTitle(true);
  }

  const onDeleteHandler = () => {
    dispatch(setModalDetails({
      isModalOpen: true,
      modalType: "DELETE_TASK",
      modalProps: {
        modalText: "Confirm to delete the ticket ?",
        sectionId: sectionId,
        ticketDetails: {
          id: ticketId
        }
      }
    }));
  };

  return showEditTicketTitle ? (
    <EditTitle
      setShowEditTicketTitle={setShowEditTicketTitle}
      taskId={ticketId}
      content={content}
    />
  ) : (
    <Draggable draggableId={ticketId} index={index} key={ticketId}>
      {(provided) => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardMenu>
            <DeleteIcon onDeleteHandler={onDeleteHandler} />
            <EditIcon onEditHandler={onEditHandler2} />
          </CardMenu>
          <div
            style={{ height: "100%", display: "flex" }}
            onClick={onEditHandler}
          >
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
