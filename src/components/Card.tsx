import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const CardContainer = styled.div`
    min-height: 100px;
    background-color: white;
    padding: 2px;
    margin: 3px;
    margin-bottom: 6px;
    border-radius: 5px;
`

const CardContent = styled.div`

`

const Card = ({index}: CardProps) => {
    return (
        // <Draggable key={card.id}>
            
        // </Draggable>
        <CardContainer>
            <CardContent>
            </CardContent>
        </CardContainer>
    )
}

type CardProps ={
    index: number
}
export default Card;