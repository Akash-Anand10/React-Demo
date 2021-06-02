import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const SectionContainer = styled.div`
    
    width: 300px;
    min-width: 300px;
    background-color: rgba(235, 236, 240, 0.5);
    margin: 3px;
    border-radius: 3px;
`
const SectionHeader = styled.div`

`
const SectionName = styled.h3`
    margin: 5px;
`
type CardProps = {
    name: string,
    index: number,
}

export default function Section({name, index}: CardProps){
    return(
        <Draggable draggableId={index.toString()} index={index} key={index} >
            {(provided, snapshot) => (
                    <SectionContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                        <SectionHeader>
                            <SectionName>
                            {name}
                            </SectionName>
                        </SectionHeader>
                    </SectionContainer>
                )}
        </Draggable>
        
    )
}