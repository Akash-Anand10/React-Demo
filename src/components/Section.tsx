import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useState } from "react";
import { useAppSelector } from "../hooks";
import { renameSection, setModalDetails } from "../actions/boardActions";
import { useDispatch } from "react-redux";
import AddTicket from "./addTicket";
import { Draggable, Droppable } from "react-beautiful-dnd";

const SectionContainer = styled.div`
  width: 300px;
  min-width: 300px;
  /* background-color: rgba(235, 236, 240, 0.5); */
  background-color: transparent;
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
  text-align: center;
`;
const SectionName = styled.h3`
  margin: 5px;
  width: 80%;
  max-width: 15ch;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const AddTicketUnfocused = styled.div`
  height: 25px;
  background-color: rgba(235, 236, 240, 0.5);
  display: flex;
  padding: 5px;
  margin: 7px;
  margin-bottom: 6px;
  border-radius: 5px;
`;

export default function Section({ sectionId, index }: SectionProps) {
  const dispatch = useDispatch();

  const sectionTicketIds: string[] = useAppSelector(
    (state) => state.board.sections?.byId[sectionId]?.tickets
  );
  const allSections = useAppSelector((state) => state.board.sections.byId);
  const allTickets = useAppSelector((state) => state.board.tickets.byId);

  const [showAddTicketTitle, setShowAddTicketTitle] = useState(false);

  const Cards = sectionTicketIds?.map((ticketId, index) => {
    return (
      <Card
        ticketId={ticketId}
        sectionId={sectionId}
        index={index}
        content={allTickets[ticketId].content}
        key={ticketId}
      />
    );
  });

  const onDeleteSectionHandler = () => {
    console.log("deleted section");
    dispatch(
      setModalDetails({
        isModalOpen: true,
        modalType: "DELETE_SECTION",
        modalProps: {
          modalText: "Confirm to delete the section ?",
          sectionId: sectionId
        }
      })
    );
  };

  const onAddTicketUnFocusedHandler = () => {
    console.log("Add ticket focused");
    setShowAddTicketTitle(true);
  };

  const sectionRenamehandler = () => {
    console.log("section rename handler");
    dispatch(renameSection({ sectionId: "1", sectionTitle: "" }));
  };

  const DeleteSectionIcon = () => {
    return (
      <div
        onClick={onDeleteSectionHandler}
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
            <SectionName onClick={sectionRenamehandler}>
              {allSections[sectionId]?.title}
            </SectionName>
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
                {showAddTicketTitle ? (
                  <AddTicket
                    sectionId={sectionId}
                    setShowAddTicket={setShowAddTicketTitle}
                  />
                ) : (
                  <AddTicketUnfocused onClick={onAddTicketUnFocusedHandler}>
                    <span
                      style={{
                        fontSize: 14,
                        alignSelf: "center",
                      }}
                    >
                      {"+ Add another card..."}
                    </span>
                  </AddTicketUnfocused>
                )}
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
