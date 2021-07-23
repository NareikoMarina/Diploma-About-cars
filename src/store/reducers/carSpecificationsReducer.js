import { fb } from "./../../firebase";

const SET_SPEC = "SET_SPEC";
const SET_LOADING_STATUS = "SET_LOADING_STATUS";

const DB = fb.database();

const initialState = {
  currentSpec: {},
  isLoading: true,
};

const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  payload: {
    status,
  },
});

const setSpec = (spec) => ({
  type: SET_SPEC,
  payload: { spec },
});

export const setCurrentSpec = (url) => (dispatch) => {
  console.log(url);
  DB.ref(`/cars/${url}`)
    .once("value", (snapshot) => {
      console.log(snapshot.val());
      dispatch(setSpec(snapshot.val()));
    })
    .then(() => {
      dispatch(setLoadingStatus(false));
    });
};

const carSpecReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.status,
      };
    case SET_SPEC:
      return {
        ...state,
        currentSpec: action.payload.spec,
      };

    default:
      return state;
  }
};

export default carSpecReducer;
