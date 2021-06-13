import { useState } from "react"
import styled from "styled-components"
import Section from "./Section"
import { data } from "./models/data"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { useAppSelector } from "../hooks"

const SectionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
`
const SectionHeader = styled.div`
display: flex;
flex-direction: row;
`

export default function Board() {

    const onDragEnd = (result: DropResult) => {
        //todo
        if(result.type === "BOARD"){
            if(!result.destination) {
                return;
            }
            if (result.destination.droppableId === result.source.droppableId &&
                result.destination.index === result.source.index
                ){
                    return;
                }
            const newSecs = Array.from(secs);
            const sourceIndex = result.source.index;
            const destinationIndex = result.destination.index;
            newSecs.splice(sourceIndex, 1);
            newSecs.splice(destinationIndex, 0, secs[sourceIndex]);
            setSecs(newSecs);
        }
        
        if(result.type === "SECTION"){
            if(result.destination?.droppableId === result.source.droppableId){
                // ticket was moved in same section
                const newTicketData = {...ticketsData};
                const sourceIndex = result.source.index;
                const destinationIndex = result.destination.index;
                const ticketSection = result.source.droppableId;
                newTicketData[ticketSection].tickets.splice(sourceIndex, 1);
                newTicketData[ticketSection].tickets.splice(destinationIndex, 0, result.draggableId);
                setTicketsData(newTicketData);
                console.log(newTicketData);
            }else{
                // ticket was moved in different section
                if(!result.destination) {
                    return;
                }else{
                    const newTicketData = {...ticketsData};
                const sourceIndex = result.source.index;
                const destinationIndex = result.destination?.index;
                const sourceSection = result.source.droppableId;
                const destinationSection = result.destination.droppableId;
                newTicketData[sourceSection].tickets.splice(sourceIndex, 1);
                newTicketData[destinationSection].tickets.splice(destinationIndex, 0, result.draggableId);
                setTicketsData(newTicketData);
                console.log(newTicketData);
                }
            }
        }
        console.log(result)
        
    }

    const [secs, setSecs] = useState(Object.keys(data));
    
    const [ticketsData, setTicketsData] = useState(data);

    const sectionsData = useAppSelector((state) => state.sections);

    const Sections_ = sectionsData.allIds?.map((sectionId, index) => {
        return(
            <Section sectionId={sectionId} index={index} key={sectionId}/>
        )
    })
    

    return(
        <>
            <SectionHeader className='board-header' />
            
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='parent_dropable_board' type="BOARD" direction="horizontal">
                    {(provided, snapshot)=>(
                        <SectionsContainer 
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                        >
                        {Sections_}
                        {provided.placeholder}
                        </SectionsContainer>
                    )}
                </Droppable>
            </DragDropContext>
            
        </>
    )
}