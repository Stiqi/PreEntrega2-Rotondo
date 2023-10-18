import { Link } from "react-router-dom";
import style from "./card.module.css";

//
const Card = ({ image, title, price }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style["card-img"]} />
      <p className={style.name}>{title}</p>
      <p className={style.price}>${price}</p>
      <Link to={{}} className={style.detail}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default Card;
