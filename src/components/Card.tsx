import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const CardContainer = styled.div`
    height: 100px;
    max-height: 100px;
    background-color: white;
    padding: 2px;
    margin: 7px;
    margin-bottom: 6px;
    border-radius: 5px;
`

const CardContent = styled.div`

`

const Card = ({ index, ticketId, content }: CardProps) => {
  return (
    <Draggable draggableId={ticketId} index={index} key={ticketId} >
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

type CardProps = {
  index: number,
  content: string,
  ticketId: string
}
export default Card;