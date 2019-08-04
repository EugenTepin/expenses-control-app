import { ADD_NEW_ITEM, DELETE_ITEM } from './actions'
import data from './data';

const initialState = {
    items: data,
    viewType: 'List'
};

function expensesControlApp(state, action) {
    if (state === void 0) {
        return initialState;
    }
    switch (action.type) {
        case ADD_NEW_ITEM:
            var newItems = state.items.slice();
            newItems.push({
                id: action.id,
                category: action.category,
                expenses: action.expenses,
                incomes: action.incomes
            });
            return Object.assign({}, state, {
                items: newItems
            });
            break;
        case DELETE_ITEM:
            return Object.assign({}, state, {
                items: state.items.filter((item) => { return item.id !== action.id; })
            });
            break;
        default:
            return state;
            break;
    }
}

export default expensesControlApp