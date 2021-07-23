import { Link } from "react-router-dom";
import style from "./ShowFavorites.module.css";

const ShowFavorites = (props) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  console.log(favorites);
  return (
    <div className={style.main__container}>
      <Link className={style.link} to="/">
        Back to brands
      </Link>
      <div className={style.container}>
        <h3 className={style.favorite__header}>Favorite cars:</h3>
        {favorites.map((item) => (
          <div className={style.container_favorite}>
            <h5 className={style.favorite__content}>{item.model}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowFavorites;
