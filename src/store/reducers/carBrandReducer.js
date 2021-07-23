import { fb } from '../../firebase';

const BRAND_IS_LOADING = 'BRAND_IS_LOADING';
const GET_BRAND = 'GET_BRAND';

const DB = fb.database();

const initialState = {
    brand: [],
    isLoading: false,
};

const brandIsLoading = (bool) => ({
    type: BRAND_IS_LOADING,
    payload: bool,
});

const getBrand = (brand) => ({
    type: GET_BRAND,
    payload: brand,
});

export const getBrandData = () => (dispatch) => {
    dispatch(brandIsLoading(true));
    DB.ref('/cars').once('value', (snapshot) => {
        console.log(snapshot.val())
        dispatch(getBrand(snapshot.val()))
    })
    .then(() => {
        dispatch(brandIsLoading(false))
    });
};

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BRAND: {
            return {
                ...state,
                brand: action.payload,
            }
        }
        case BRAND_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        default: {
            return state;
        }
    }
};

export default brandReducer;



