import { useState, useEffect, useRef } from 'react';
import "./Column.scss";
import Card from "components/Card/Card";
import Input from "components/Input/Input";
import InputTitle from 'components/Input/InputTitle';

const Column = (props) => {
  const { title, cards } = props.column;
  const columnPost = props.post;
  console.log(columnPost);
  const currentBoard = props.currentBoard;
  const [isAddCard, setIsAddCard] = useState(false)
  const [isEditTitle, setIsEditTitle] = useState(false)
  // const [columnTitle, setColumnTitle] = useState(title)

  const titleRef = useRef(null)
  const cardRef = useRef(null)

  const handleEditTitle = () => {
    setIsEditTitle(!isEditTitle)
  }

  const handleAddCard = () => {
    setIsAddCard(!isAddCard)
  } 
  useEffect(() => {
    if(isEditTitle) {
      titleRef.current.focus()
    }
    if(isAddCard) {
      cardRef.current.focus()
    }
  }, [isAddCard, isEditTitle])
  return (
    <div className="column">
      { !isEditTitle ? (
        <header className="" onClick={handleEditTitle}> 
          {title} 
          <i className="fa-solid fa-pencil"></i>
        </header>
      ) : <InputTitle ref={titleRef} type='Column' setEdit={setIsEditTitle} data={title} columnPost={columnPost} currentBoard={currentBoard} />}
      <ul className="card-list">
        {cards.map((card, index) => <Card card={card} cardPost={index} key={index} columnTitle={title}/>)}
      </ul>
      {!isAddCard ? (
        <footer>
          <div className="add-card-btn" onClick={handleAddCard}>
            <i className="fa-solid fa-plus"></i>
            Add another card
          </div>
        </footer>
      ) : <Input ref={cardRef} type='Add Card' setIsAddCard={setIsAddCard} columnPost={columnPost} currentBoard={currentBoard} />}
    </div>
  );
};

export default Column;
