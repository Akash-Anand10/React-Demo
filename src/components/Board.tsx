import React, { useState } from "react"
import styled from "styled-components"
import Section from "./Section"
import { data } from "./models/data"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

const SectionsContainer = styled.div`
    height: 95%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
`
const SectionHeader = styled.div`
display: flex;
flex-direction: row;
`

export default function Board() {

    const onDragEnd = (result: any) => {
        //todo
        const newSecs = Array.from(secs);
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        newSecs.splice(sourceIndex, 1);
        newSecs.splice(destinationIndex, 0, secs[sourceIndex]);
        setSecs(newSecs);
    }

    const [secs, setSecs] = useState(Object.keys(data));
    
    const Sections = secs?.map((section, index) => <Section section = {section} index={index} key={index}/>)

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
                        {Sections}
                        {provided.placeholder}
                        </SectionsContainer>
                    )}
                </Droppable>
            </DragDropContext>
            
        </>
    )
}