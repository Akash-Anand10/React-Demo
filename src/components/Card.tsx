import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useThunkDispatch } from "../hooks";
import { MouseEventHandler } from "react";
import {removeTicketFromSection} from "../actions/boardActions"

const CardContainer = styled.div`
  height: 70px;
  max-height: 100px;
  background-color: white;
  margin: 7px;
  margin-bottom: 6px;
  border-radius: 5px;
`;

const CardContent = styled.div`
  padding: 7px;
`;

const CardMenu = styled.div`
  background-color: rgba(197, 221, 191, 0.7);
  height: 15px;
  padding-right: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-end
`;

type menuProps = {
  onDeleteHandler: MouseEventHandler<HTMLDivElement>
}
const Menu = ({onDeleteHandler}: menuProps) => {
  return(
    <div style={{
      height: "15px",
      width: "15px",
      cursor: "pointer"
    }}
    onClick={onDeleteHandler}
    >
      <FontAwesomeIcon icon={faEllipsisH} size="sm"/>
    </div>
  )
}

const Card = ({ index, ticketId, content, sectionId }: CardProps) => {
  
  const dispatch = useThunkDispatch();

  const onDeleteHandler = () => {
    console.log("deleted", ticketId);
    dispatch(removeTicketFromSection({
      sectionId: sectionId,
      ticketDetails: {
        id: ticketId
      }
    }));
  }

  return (
    <Draggable draggableId={ticketId} index={index} key={ticketId}>
      {(provided) => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardMenu>
            <Menu onDeleteHandler={onDeleteHandler}/>
          </CardMenu>
          <CardContent>{content}</CardContent>
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