import styles from "./item-detail-container.module.css";
import catalogo from "../../catalog";
import ItemCounter from "../ItemCounter/ItemCounter";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const createDetail = () => {
    if (id < catalogo.length + 1) {
      const item = catalogo.filter((i) => i.id == id)[0];
      const { title, image, price, size } = item;
      return (
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.info}>
            <div className={styles["image-container"]}>
              <img src={image} alt={title} className={styles.imagen} />
            </div>
            <div className={styles.cta}>
              <div className={styles.description}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia earum delectus corporis neque consectetur enim nisi.
                  Molestiae voluptate voluptatum totam modi sint libero,
                  incidunt laudantium alias reiciendis voluptatem aperiam sed.
                  Ab commodi nam voluptate ullam, sapiente reprehenderit quae
                  nihil dolor quidem neque omnis aliquam culpa magnam? Delectus
                  quae necessitatibus magni aperiam voluptate totam praesentium
                  rem. Voluptas est illo atque maiores.
                </p>
              </div>
              <ul className={styles.list}>
                <li>Tamaño: {size}</li>
                <li>Precio unitario: ${price}</li>
              </ul>
              <div>
                <ItemCounter price={price} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <h2 className={styles.title}>Objeto no encontrado</h2>
        </div>
      );
    }
  };

  return createDetail();
};

export default ItemDetailContainer;
