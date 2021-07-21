import { useEffect } from "react";
import styles from "./CarBrand.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBrandData } from "../../store/reducers/carBrandReduser";
import Loader from "../Loader/Loader";
import { getBrands, getBrandsLoagingStatus } from "../../store/selectors";

const CarBrand = () => {
  const dispatch = useDispatch();

  const brands = useSelector(getBrands);
  const isBrandsLoading = useSelector(getBrandsLoagingStatus);

  const cars = Object.values(brands);
  console.log(cars);

  useEffect(() => {
    dispatch(getBrandData());
  }, []);

  return isBrandsLoading ? (
    <Loader />
  ) : (
    <div>
      {cars.map((car, i) => {
        return (
          <div key={i}>
            <button>{car.brand}</button>
          </div>
        );
      })}
    </div>
  );
};

export default CarBrand;
