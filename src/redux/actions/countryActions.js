import countryApi from "api/countryApi";
import {
  CHANGE_KEYWORD,
  FETCH_COUNTRY_LIST,
  FETCH_ERROR,
  FETCH_SUCCESS,
  FILTER_COUNTRY,
  SEARCH_COUNTRY,
} from "redux/constants/constants";

export const fetchCountryList = () => async (dispatch) => {
  try {
    const response = await countryApi.getAll();
    dispatch({ type: FETCH_SUCCESS, payload: { countries: response } });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: { error } });
  }
};

export const changeKeyword = (keyword) => {
  return { type: CHANGE_KEYWORD, payload: { keyword } };
};

export const searchCountry = (keyword) => {
  return { type: SEARCH_COUNTRY, payload: { keyword } };
};

export const filterCountry = (region) => {
  return { type: FILTER_COUNTRY, payload: { region } };
};
