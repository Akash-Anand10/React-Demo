import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useAppSelector } from "../hooks";
import { useEffect } from "react";
import { useThunkDispatch } from "../hooks";
import { removeSection } from "../actions/boardActions";

const SectionContainer = styled.div`
  width: 300px;
  min-width: 300px;
  background-color: rgba(235, 236, 240, 0.5);
  margin-left: 6px;
  margin-top: 6px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
const SectionHeader = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionName = styled.h3`
  margin: 5px;
  width: 80%;
  max-width: 15ch;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default function Section({ sectionId, index }: SectionProps) {
  const dispatch = useThunkDispatch();

  const sectionTicketIds: string[] = useAppSelector(
    (state) => state.sections.byId[sectionId]?.tickets
  );
  const allSections = useAppSelector((state) => state.sections.byId);
  const allTickets = useAppSelector((state) => state.tickets.byId);
  const sectionTickets = sectionTicketIds?.map(
    (ticketId) => allTickets[ticketId]
  );

  useEffect(() => {}, [allSections]);

  const Cards = sectionTickets?.map((ticket, index) => {
    return (
      <Card
        ticketId={ticket.id}
        index={index}
        content={ticket.content}
        key={ticket.id}
      />
    );
  });

  const onDeleteHandler = () => {
    console.log("deleted section");
    dispatch(
      removeSection({
        sectionId: sectionId,
      })
    );
  };

  const DeleteSectionIcon = () => {
    return (
      <div
        onClick={onDeleteHandler}
        style={{
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    );
  };
  return (
    <Draggable draggableId={sectionId} index={index} key={sectionId}>
      {(provided, snapshot) => (
        <SectionContainer
          className="SectionContainer"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <SectionHeader {...provided.dragHandleProps}>
            <SectionName>{allSections[sectionId]?.title}</SectionName>
            <DeleteSectionIcon />
          </SectionHeader>
          <Droppable droppableId={sectionId} type="SECTION">
            {(provided, snapshot) => (
              <div
                style={{ height: "100%" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {Cards}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </SectionContainer>
      )}
    </Draggable>
  );
}

type SectionProps = {
  index: number;
  sectionId: string;
};
