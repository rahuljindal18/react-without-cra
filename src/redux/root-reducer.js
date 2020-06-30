import {combineReducers} from 'redux';
import {matchResultsReducer} from './match-results/match-results-reducer';
import {uiThemeReducer} from './ui-theme/ui-theme-reducer';

export default combineReducers({
    matchResults: matchResultsReducer,
    uiTheme: uiThemeReducer
});