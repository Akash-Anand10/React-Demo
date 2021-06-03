import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"
import { data } from "./models/data"
import Card from "./Card"


const SectionContainer = styled.div`
    width: 300px;
    min-width: 300px;
    background-color: rgba(235, 236, 240, 0.5);
    margin-left: 6px;
    margin-top: 6px;
    border-radius: 3px;
`
const SectionHeader = styled.div`

`
const SectionName = styled.h3`
    margin: 5px;
`

export default function Section({section, index}: SectionProps){
    
    const Cards = data[section]?.content?.map((card, index) => <Card index={index} key={index}/>)

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
                            {data[section].title}
                            </SectionName>
                        </SectionHeader>
                        <Card index={1}/>
                        {Cards}
                    </SectionContainer>
                )}
        </Draggable>
        
    )
}

type SectionProps = {
    index: number,
    section: any
}