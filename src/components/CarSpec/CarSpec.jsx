import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setCurrentSpec } from "../../store/reducers/carSpecificationsReducer";
import {
  getCurrentSpec,
  getCurrentSpecLoadingStatus,
} from "./../../store/selectors";
import Loader from "./../Loader";
import style from "./CarSpec.module.css";

const CarSpec = (props) => {
  const dispatch = useDispatch();
  const spec = useSelector(getCurrentSpec).specifications;
  const isLoading = useSelector(getCurrentSpecLoadingStatus);
  console.log(spec);
  const { model, brand } = useParams();
  useEffect(() => {
    dispatch(setCurrentSpec(`/${brand}/model/${model}`));
  }, []);
  const addToFavorite = () => {
    if (
      JSON.parse(localStorage.getItem("checked")) &&
      JSON.parse(localStorage.getItem("checked").includes(model))
    ) {
      return;
    }
    localStorage.setItem(
      "favorites",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("favorites")) || []),
        { model, ...spec },
      ])
    );
    localStorage.setItem(
      "checked",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("checked")) || []),
        model,
      ])
    );
  };
  console.log(model, brand);
  return isLoading ? (
    <Loader />
  ) : (
    <div className={style.main__container}>
      <Link className={style.link} to="/">
        Back to brands
      </Link>
      <Link className={style.link} to={`/${brand}`}>
        Back to models
      </Link>
      <div className={style.container}>
        <div className={style.img__container}>
          <img className={style.img} src={`${spec?.image}`} />
        </div>
        <div className={style.specifications}>
          <h3>{`Info about ${model} model:`}</h3>
          <div className={style.specifications__content}>
            <p>{`Years:  ${spec?.years}`}</p>
            <p>{`Body type:   ${spec?.body}`}</p>
            <p>{`Fuel:   ${spec?.fuel}`}</p>
            <p>{`Engine:   ${spec?.engine}`}</p>
            <p>{`Power:   ${spec?.power}`}</p>
            <p>{`Acceleration:  ${spec?.speed}`}</p>
            <p>{`Max-speed:  ${spec["max-speed"]}`}</p>
            <p>{`Drive type:  ${spec?.drive}`}</p>
            <p>{`Transmission:  ${spec?.transmission}`}</p>
          </div>
        </div>
      </div>
      <div className={style.btn__container}>
        <button className={style.add__btn} onClick={addToFavorite}>
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default CarSpec;
