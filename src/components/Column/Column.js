import Card from "components/Card/Card";
import "./Column.scss";
import { mapOrder } from "ultilities/sort"

const Column = (props) => {
  const { title, cards, cardOrder } = props.column;

  return (
    <div className="column">
      <header className="">{ title }</header>
      <ul className="card-list">
        {mapOrder(cards, cardOrder, 'id').map((card, index) => <Card card={card} key={index}/>)}
      </ul>
      <footer>Add another card to your list</footer>
    </div>
  );
};

export default Column;
