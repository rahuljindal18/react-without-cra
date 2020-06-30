import {
    MATCH_RESULT_LOADING,
    MATCH_RESULT_SUCCESS,
    MATCH_RESULT_ERROR
} from './match-results-action-types';
  
  const initialState = {
    loading: false,
    data: [],
    error: null
  };
  
  export function matchResultsReducer(state = initialState, action) {
    switch (action.type) {
      case MATCH_RESULT_LOADING:
        return {
          ...state,
          loading: true
        };
      case MATCH_RESULT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload.data
        };
      case MATCH_RESULT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }