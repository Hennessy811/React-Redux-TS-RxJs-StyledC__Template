import { combineReducers } from "redux";
import { SET_VISIBILITY_FILTER, VisibilityFilters } from "../actions/actions";
import { todos } from "./todos.reducer";

const { SHOW_ALL } = VisibilityFilters;
function visibilityFilter(state = SHOW_ALL, action: any) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});
export default todoApp;
