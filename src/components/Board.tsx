import styled from "styled-components";
import Loader from "react-loader";
import Section from "./Section";
import EditSection from "./addSection";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useAppSelector } from "../hooks";
import {
  moveTicketWithinSameSection,
  moveTicketFromOneSectionToAnother,
} from "../actions/boardActions";
import { loadInitalData, moveSection } from "../actions/boardActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  height: 96vh;
`;
const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddSectionUnfocused = styled.div`
  width: 300px;
  min-width: 300px;
  height: 28px;
  background-color: rgba(235, 236, 240, 0.5);
  margin-left: 6px;
  margin-top: 6px;
  border-radius: 3px;
  display: flex;
  padding: 5px;
  justify-content: center;
`;

export default function Board() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(loadInitalData());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (result.type === "BOARD") {
      if (!result.destination) return;
      if (
        result.destination.droppableId === result.source.droppableId &&
        result.destination.index === result.source.index
      )
        return;
      dispatch(
        moveSection({
          from: result.source.index,
          to: result.destination?.index,
          sectionId: result.draggableId,
        })
      );
    }

    if (result.type === "SECTION") {
      if (result.destination?.droppableId === result.source.droppableId) {
        dispatch(
          moveTicketWithinSameSection({
            ticketId: result.draggableId,
            fromIndex: result.source.index,
            toIndex: result.destination.index,
            fromSectionId: result.source.droppableId,
            toSectionId: result.source.droppableId,
          })
        );
      } else {
        // ticket was moved in different section
        if (!result.destination) {
          return;
        } else {
          dispatch(
            moveTicketFromOneSectionToAnother({
              ticketId: result.draggableId,
              fromIndex: result.source.index,
              toIndex: result.destination.index,
              fromSectionId: result.source.droppableId,
              toSectionId: result.destination.droppableId,
            })
          );
        }
      }
    }
    console.log(result);
  };

  // Intialising the states here:
  const sectionsData = useAppSelector((state) => state.board.sections);
  const isDataLoaded = useAppSelector((state) => state.board.isDataLoaded);
  const [showEditSectionName, setShowEditSectionName] = useState(false);

  const editSectionHandler = () => {
    console.log("edit section");
    setShowEditSectionName(true);
  };

  useEffect(() => {
    console.log(`isDataLoaded changed to ${isDataLoaded}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDataLoaded]);

  const Sections = sectionsData.allIds?.map(
    (sectionId: string, index: number) => {
      return <Section sectionId={sectionId} index={index} key={sectionId} />;
    }
  );

  return isDataLoaded ? (
    <>
      <SectionHeader className="board-header" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="parent_dropable_board"
          type="BOARD"
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <SectionsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Sections}
              {provided.placeholder}
              {showEditSectionName ? (
                <EditSection setShowEditSection={setShowEditSectionName} />
              ) : (
                <AddSectionUnfocused onClick={editSectionHandler}>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    + ADD SECTION
                  </span>
                </AddSectionUnfocused>
              )}
            </SectionsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  ) : (
      <Loader loaded={isDataLoaded} color="black" radius={30} zIndex={100}/>
  );
}
