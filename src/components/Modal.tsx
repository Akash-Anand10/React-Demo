import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks";


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div<{ fadeType: number }>`
  width: 30%;
  height: 30%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  opacity: ${({fadeType}) => fadeType};
  transition: ${({ fadeType }) => {
    if(fadeType === 1) return `opacity linear 0.3s;`;
    if(fadeType === 0) return `opacity linear 0.2s;`;
}};
`;

const DeleteBtn = styled.div`
  width: auto;
  padding: 10px;
  text-align: center;
  background-color: orangered;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;
const CancelBtn = styled.div`
  width: auto;
  padding: 10px;
  text-align: center;
  background-color: #b1b1b1;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

const Modal = ({ handleCancel, handleOk, TextContent }) => {
  const [fadeType, setFadeType] = useState(0)
  const isOpen = useAppSelector((state) => state.board.modalDetails.isModalOpen)

  useEffect(() => {
    if(isOpen) setFadeType(1)
    
  }, [isOpen])

  const handleCancelLocal = () => {
    setFadeType(0)
    setTimeout(()=>handleCancel(), 200)
    
  }

  const handleOkLocal = () => {
    setFadeType(0)
    setTimeout(()=>handleOk(), 200)
    
  }

  if (isOpen) {
    return (
      <Overlay>
        <ModalContainer id={'abc' } fadeType={fadeType}>
          {TextContent}
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-around",
              top: "80%",
            }}
          >
            <DeleteBtn onClick={handleOkLocal}>Delete</DeleteBtn>
            <CancelBtn onClick={handleCancelLocal}>Cancel</CancelBtn>
          </div>
        </ModalContainer>
      </Overlay>
    );
  } else {
    return <></>;
  }
};

export default Modal;
