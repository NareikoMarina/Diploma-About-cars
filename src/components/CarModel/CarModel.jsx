import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import style from "./CarModel.module.css";
import { getModelData } from "../../store/reducers/carModelReducer";
import { getModels, getModelsLoadingStatus } from "../../store/selectors";
import { Link, useParams } from "react-router-dom";

const CarModel = () => {
  const { brand } = useParams();

  const dispatch = useDispatch();

  const models = useSelector(getModels)?.model || {};
  const isModelLoading = useSelector(getModelsLoadingStatus);

  const cars = [];
  for (let model in models) {
    cars.push({ [model]: models[model] });
  }

  useEffect(() => {
    dispatch(getModelData(brand));
  }, []);

  return isModelLoading ? (
    <Loader />
  ) : (
    <div className={style.main__container}>
      <Link className={style.link__back} to="/">
        Back to brands
      </Link>
      <div className={style.container}>
        <h1 className={style.second__header}>Select car model</h1>
        {cars.map((car, i) => {
          return (
            <div className={style.model__container} key={i}>
              <Link
                className={style.model}
                to={`/${brand}/${Object.keys(car)[0]}`}
              >
                {Object.keys(car)[0]}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarModel;
