import {
  FETCH_COUNTRY_LIST,
  FETCH_ERROR,
  FETCH_SUCCESS,
} from "redux/constants/constants";

const initialState = {
  keyword: "",
  region: "",
  list: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_LIST:
      return { ...state };

    case FETCH_SUCCESS:
      return { ...state, list: action.payload.countries };

    case FETCH_ERROR:
      const { error } = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default countryReducer;
