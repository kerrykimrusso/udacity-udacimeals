import * as Actions from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
};

export function foodReducer(state = {}, action) {
    switch(action.type) {
        case Actions.ADD_RECIPE:
            const {recipe} = action.payload || {};
            return {
                ...state,
                [recipe.label]: recipe,
            };
        default:
            return state;
    }
}

export function calendarReducer(state = initialState, action) {
    const {day, recipe, meal} = action.payload || {};
    switch(action.type) {
        case Actions.ADD_RECIPE:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: recipe.label
                }
            };
        case Actions.REMOVE_FROM_CALENDAR:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null
                }
            }
        default:
            return state;
    }
}

export default combineReducers({
    food: foodReducer,
    calendar: calendarReducer,
});