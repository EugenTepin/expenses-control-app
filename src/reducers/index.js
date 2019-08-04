import { ADD_NEW_ITEM, DELETE_ITEM } from '../actions'
import data from '../data';

const initialState = {
    items: data,
};

function expensesControlApp(state, action) {
    if (state === void 0) {
        return initialState;
    }
    let items;
    switch (action.type) {
        case ADD_NEW_ITEM:
            return { ...state, items: [...state.items, action.item] };
        case DELETE_ITEM:
            items = state.items.filter((item) => { return item.id !== action.id; });
            return { ...state, items };
        default:
            return state;
    }
}

export default expensesControlApp