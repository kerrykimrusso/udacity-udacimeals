import React from 'react'
import { connect } from 'react-redux';
import * as Action from '../actions';
import App from './App';

function mapStateToAppProps(state) {
    const {food, calendar} = state;
    const daysOfWeek = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    return {
        calendar: daysOfWeek.map((day) => ({ 
            day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
                return meals;
            }, {})
        }))
    }
};

function mapDispatchToAppProps(dispatch) {
    return {
        selectRecipe: ({day, recipe, meal}) => dispatch(Action.create(Action.ADD_RECIPE, {day, recipe, meal})),
        onRemove: ({day, meal}) => dispatch(Action.create(Action.REMOVE_FROM_CALENDAR, {day, meal}))
    }
}

const ReduxApp = connect(mapStateToAppProps, mapDispatchToAppProps)(App);

const Connect = (props) => {
    return <ReduxApp/>;
};

export default Connect;