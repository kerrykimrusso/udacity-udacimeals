import * as Actions from '../actions';

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

export function calendarReducer(state = initialState, action) {
    const {type, day, recipe, meal} = action;
    switch(type) {
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