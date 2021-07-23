import { fb } from "../../firebase";

const MODEL_IS_LOADING = "MODEL_IS_LOADING";
const GET_MODEL = "GET_MODEL";

const DB = fb.database();

const initialState = {
  model: [],
  isLoading: true,
};

const modelIsLoading = (bool) => ({
  type: MODEL_IS_LOADING,
  payload: bool,
});

const getModel = (model) => ({
  type: GET_MODEL,
  payload: model,
});

export const getModelData = (brand) => (dispatch) => {
  dispatch(modelIsLoading(true));
  DB.ref(`/cars/${brand}`)
    .once("value", (snapshot) => {
      console.log(snapshot.val());
      dispatch(getModel(snapshot.val()));
    })
    .then(() => {
      dispatch(modelIsLoading(false));
    });
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODEL: {
      return {
        ...state,
        model: action.payload,
      };
    }
    case MODEL_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default modelReducer;
