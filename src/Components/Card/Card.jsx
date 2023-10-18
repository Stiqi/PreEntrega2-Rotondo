import { Link } from "react-router-dom";
import style from "./card.module.css";

//
const Card = ({ image, title, price, id }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style["card-img"]} />
      <p className={style.title}>{title}</p>
      <p className={style.price}>${price}</p>
      <Link to={`/item/${id}`} className={style.detail}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default Card;
