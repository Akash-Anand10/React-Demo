import styled from "styled-components";
import Section from "./Section";
import EditSection from "./editSection";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useThunkDispatch, useAppSelector } from "../hooks";
import {
  moveTicketWithinSameSection,
  moveTicketFromOneSectionToAnother,
} from "../actions/sectionActions";
import { moveSection } from "../actions/boardActions";
import { useEffect, useState } from "react";

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
  height: 45px;
  background-color: rgba(235, 236, 240, 0.5);
  margin-left: 6px;
  margin-top: 6px;
  border-radius: 3px;
  display: flex;
`;

export default function Board() {
  const dispatch = useThunkDispatch();

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
        })
      );
    }

    if (result.type === "SECTION") {
      if (result.destination?.droppableId === result.source.droppableId) {
        dispatch(
          moveTicketWithinSameSection({
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
  const sectionsData = useAppSelector((state) => state.sections);
  const [showEditSectionName, setShowEditSectionName] = useState(false);

  const editSectionHandler = () => {
    console.log("edit section");
    setShowEditSectionName(true);
  };

  const Sections = sectionsData.allIds?.map((sectionId, index) => {
    return <Section sectionId={sectionId} index={index} key={sectionId} />;
  });

  useEffect(()=>{
    console.log(sectionsData)
  }, [sectionsData]);
  
  return (
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
              {showEditSectionName 
              ? <EditSection setShowEditSection={setShowEditSectionName}/> 
              : (
                <AddSectionUnfocused onClick={editSectionHandler}>
                  <p>{"+ ADD SECTION"}</p>
                </AddSectionUnfocused>
              )}
            </SectionsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
