import { useEffect } from "react";
import styles from "./CarBrand.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBrandData } from "../../store/reducers/carBrandReducer";
import Loader from "../Loader/Loader";
import { getBrands, getBrandsLoadingStatus } from "../../store/selectors";
import { Link } from "react-router-dom";

const CarBrand = () => {
  const dispatch = useDispatch();

  const brands = useSelector(getBrands);
  const isBrandsLoading = useSelector(getBrandsLoadingStatus);

  const cars = Object.values(brands);
  console.log(cars);

  useEffect(() => {
    dispatch(getBrandData());
  }, []);

  return isBrandsLoading ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <div className={styles.favorite__container}>
        <Link to={"/favorites"} className={styles.favorite}>
          Favorites
        </Link>
      </div>
      <div className={styles.main__container}>
        <h1 className={styles.first__header}>Select car brand</h1>
        {cars.map((car, i) => {
          return (
            <div className={styles.brand__container}>
              <div className={styles.brand__name} key={i}>
                <Link
                  className={styles.brand}
                  to={`${car.brand.toLowerCase()}`}
                >
                  {car.brand}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarBrand;
