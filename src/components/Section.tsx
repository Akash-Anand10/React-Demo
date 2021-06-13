import styled from "styled-components"
import { Draggable, Droppable } from "react-beautiful-dnd"
import Card from "./Card"
import { useAppSelector } from "../hooks"

const SectionContainer = styled.div`
    width: 300px;
    min-width: 300px;
    height: 95vh;
    background-color: rgba(235, 236, 240, 0.5);
    margin-left: 6px;
    margin-top: 6px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
const SectionHeader = styled.div`

`
const SectionName = styled.h3`
    margin: 5px;
`

export default function Section({sectionId, index}: SectionProps){

    const sectionTicketIds: string[] = useAppSelector(state => state.sections.byId[sectionId].tickets);
    const allTickets_ = useAppSelector(state => state.tickets.byId);
    const tickets_ = sectionTicketIds.map(ticketId => allTickets_[ticketId])
    
    const Cards = tickets_?.map((ticket, index) => {
        return(
            <Card index={index} ticketId={ticket?.id} content={ticket?.content}/>
        )
    })

    return(
        <Draggable draggableId={sectionId} index={index} key={sectionId} >
            {(provided, snapshot) => (
                    <SectionContainer
                    className="SectionContainer"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    >
                        <SectionHeader {...provided.dragHandleProps}>
                            <SectionName>
                            {"sdsdsdsd"}
                            </SectionName>
                        </SectionHeader>
                        <div>
                            <Droppable droppableId={sectionId} type="SECTION" >
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
    sectionId: string
}