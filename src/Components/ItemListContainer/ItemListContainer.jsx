import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./item-list-container.module.css";
import Card from "../Card/Card";

const catalogo = [
  {
    title: "Chimuelo y Lightfury",
    price: 3900,
    id: 1,
    image: "../src/Assets/mockimg/dragon.jpg",
    description: "",
    category: "toys",
  },
  {
    title: "Groot Maceta",
    price: 2200,
    id: 2,
    image: "../src/Assets/mockimg/groot.jpg",
    description: "",
    category: "toys",
  },
  {
    title: "Mano Merlina",
    price: 2600,
    id: 3,
    image: "../src/Assets/mockimg/hand.jpg",
    description: "",
    category: "toys",
  },
  {
    title: "Llavero Defensa",
    price: 900,
    id: 4,
    image: "../src/Assets/mockimg/manopla.jpg",
    description: "",
    category: "keychains",
  },
  {
    title: "Boonie",
    price: 2800,
    id: 5,
    image: "../src/Assets/mockimg/boonie.jpg",
    description: "",
    category: "toys",
  },
  {
    title: "Cortante Cookie Gigante",
    price: 1600,
    id: 6,
    image: "../src/Assets/mockimg/cookie.jpg",
    description: "",
    category: "cutters",
  },
  {
    title: "Busto Maradona",
    price: 3500,
    id: 7,
    image: "../src/Assets/mockimg/diego.jpg",
    description: "",
    category: "toys",
  },
  {
    title: "Dragon Largo",
    price: 3200,
    id: 8,
    image: "../src/Assets/mockimg/dragon-dorado.jpg",
    description: "",
    category: "toys",
  },
  {
    title: "Iguanitas",
    price: 900,
    id: 9,
    image: "../src/Assets/mockimg/iguanas.jpg",
    description: "",
    category: "toys",
  },
  {
    title: "Litofania 'Donde Convergemos'",
    price: 2600,
    id: 10,
    image: "../src/Assets/mockimg/lito.jpg",
    description: "",
    category: "lithophanes",
  },
  {
    title: "Llavero Chicas Superpoderosas",
    price: 450,
    id: 11,
    image: "../src/Assets/mockimg/llavero-csp.jpg",
    description: "",
    category: "keychains",
  },
  {
    title: "Llavero Remeras Egresados",
    price: 400,
    id: 12,
    image: "../src/Assets/mockimg/llavero-remeras.jpg",
    description: "",
    category: "keychains",
  },
  {
    title: "Llavero Tiendas",
    price: 400,
    id: 13,
    image: "../src/Assets/mockimg/llavero-tiendas.jpg",
    description: "",
    category: "keychains",
  },
  {
    title: "Zombie",
    price: 1500,
    id: 14,
    image: "../src/Assets/mockimg/zombie.jpg",
    description: "",
    category: "toys",
  },
];

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { categoryId } = useParams();

  const filterCatalog = (catalog) => {
    if (categoryId) {
      setFilteredCatalog(
        catalog.filter((item) => item.category.includes(categoryId))
      );
    } else {
      setFilteredCatalog(items);
    }
  };

  useEffect(() => {
    const itemPromise = new Promise((response, reject) => {
      setTimeout(() => {
        catalogo.length > 0
          ? response(catalogo)
          : reject(new Error("No se encontraron items"));
      }, 1500);
    });

    itemPromise
      .then((items) => setItems(items))
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  useEffect(() => {
    filterCatalog(items);
  }, [categoryId, items]);

  return (
    <div className={style.store}>
      <h1 className={style.greeting}>{categoryId || "¡Stiqi 3D Store!"}</h1>
      {filteredCatalog.length > 0 ? (
        <div className={style["item-list"]}>
          {filteredCatalog.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              price={item.price}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <div className={style["spinner-screen"]}>
          <div className={style.spinner}></div>
          <p>Cargando...</p>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
