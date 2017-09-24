export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

export function create(type, payload) {
    return {
        type,
        payload
    };
}