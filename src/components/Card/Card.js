import InputTitle from "components/Input/InputTitle";
import ViewCard from "components/ViewCard/ViewCard";
import { useState, useRef, useEffect } from "react";
import "./Card.scss";

const Card = (props) => {
  const { boardId, columnId, title, cover } = props.card;
  const cardPost = props.cardPost
  const columnTitle = props.columnTitle
  const [isViewCard, setIsViewCard] = useState(false)
  const [isEditCard, setIsEditCard] = useState(false)
  const editCardRef = useRef()

  useEffect(() => {
    if(isEditCard) {
      editCardRef.current.focus()
    }
  }, [isEditCard])

  return (
    <li className="card-item">
      {!isEditCard ? (
        <>
          {cover && <img src={cover} className="card-cover" alt="card img" />}
          <p  onClick={()=>setIsViewCard(!isViewCard)}> {title} </p>
          <div className="card-edit" onClick={() => {setIsEditCard(true)}}>
            <i className="fa-solid fa-pencil"></i>
          </div>
        </>
      ) : <InputTitle type="Card" ref={editCardRef} data={title} setEdit={setIsEditCard} cardPost={cardPost} currentBoard={boardId} columnId={columnId} /> }
      {isViewCard && <ViewCard cardTitle={title} columnTitle={columnTitle} setIsViewCard={setIsViewCard} /> }
    </li>
  );
};

export default Card;
