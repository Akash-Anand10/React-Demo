import styled from "styled-components"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { data, allTickets } from "./models/data"
import Card from "./Card"

const SectionContainer = styled.div`
    width: 300px;
    min-width: 300px;
    height: 95vh;
    background-color: rgba(235, 236, 240, 0.5);
    margin-left: 6px;
    margin-top: 6px;
    border-radius: 3px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow-y: auto;
`
const SectionHeader = styled.div`

`
const SectionName = styled.h3`
    margin: 5px;
`

export default function Section({section, index, tickets}: SectionProps){

    const Cards = tickets?.map((ticket, index) => <Card index={index} 
    id={ticket} content={allTickets[ticket].content} key={index}/>)

    return(
        <Draggable draggableId={section} index={index} key={section} >
            {(provided, snapshot) => (
                    <SectionContainer
                    className="SectionContainer"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    >
                        <SectionHeader {...provided.dragHandleProps}>
                            <SectionName>
                            {data[section].title}
                            </SectionName>
                        </SectionHeader>
                        <div>
                            <Droppable droppableId={section} type="SECTION" >
                                {(provided, snapshot) => (
                                    <div style={{
                                        
                                    }}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    >
                                        {Cards}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                        
                        
                    </SectionContainer>
                )}
        </Draggable>
        
    )
}

type SectionProps = {
    index: number,
    section: any,
    tickets: string[]
}