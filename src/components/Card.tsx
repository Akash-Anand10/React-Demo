import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const CardContainer = styled.div`
    height: 100px;
    max-height: 100px;
    background-color: white;
    padding: 2px;
    margin: 3px;
    margin-bottom: 6px;
    border-radius: 5px;
`

const CardContent = styled.div`

`

const Card = ({index, id, content}: CardProps) => {
    return (
        <Draggable draggableId={id} index={index} key={id} >
            {(provided) => (
                <CardContainer 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                    <CardContent>
                        {content}
                    </CardContent>
                </CardContainer>
            )}
        </Draggable>
        
    )
}

type CardProps ={
    index: number,
    content: string,
    id: string
}
export default Card;