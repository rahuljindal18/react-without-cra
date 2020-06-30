import {
    SWITCH_TO_LIGHT_THEME,
    SWITCH_TO_DARK_THEME,
    SWITCH_TO_USER_THEME
} from './ui-theme-action-types';
import {themes} from '../../utils/themes';


export const switchLight = () => ({
    type: SWITCH_TO_LIGHT_THEME,
    payload: 'light'
})

export const switchUserTheme = () => ({
    type: SWITCH_TO_USER_THEME,
    payload: 'user-theme'
})

export const switchDark = () => ({
    type: SWITCH_TO_DARK_THEME,
    payload: 'dark'
})

export const toggleTheme = (currentTheme) => {
    return dispatch => {

        if(themes['user-theme']){
            if(currentTheme === 'user-theme'){
                dispatch(switchDark())
            }
            else if(currentTheme === 'dark'){
                dispatch(switchUserTheme())
            }
        }
        else{
            if(currentTheme === 'light'){
                dispatch(switchDark())
            }
            else {
                dispatch(switchLight())
            }
        }
    }
}

