import "./Card.scss";

const Card = (props) => {
  const { title, cover } = props.card;

  return (
    <li className="card-item">
      {cover && <img src={cover} className="card-cover" alt="card img" />}
      {title}
    </li>
  );
};

export default Card;
