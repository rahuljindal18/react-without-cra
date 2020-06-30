import {
    MATCH_RESULT_LOADING,
    MATCH_RESULT_SUCCESS,
    MATCH_RESULT_ERROR
} from './match-results-action-types';

const matchResultSuccess = data => ({
    type: MATCH_RESULT_SUCCESS,
    payload: {
      data
    }
  });
  
  const matchResultLoading = () => ({
    type: MATCH_RESULT_LOADING
  });
  
  const matchResultError = error => ({
    type: MATCH_RESULT_ERROR,
    payload: {
      error
    }
  });

  export const getMatchResults = (url,fifa_code) => {
    return async dispatch => {
      dispatch(matchResultLoading());
  
      try{
        const response = await fetch(url+fifa_code);
        const data = await response.json();

        dispatch(matchResultSuccess(data));
      }
      catch(err){
        dispatch(matchResultError(err.message));
      }
    };
  };