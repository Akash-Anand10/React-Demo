import React from "react"
import styled from "styled-components"
import Section from "./Section"
import { data } from "./models/data"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

export default function Board() {
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

    const onDragEnd = () => {
        //todo
    }
    const Sections = Object.keys(data).map((section, index) => <Section name={data[section].title} index={index}/>)

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