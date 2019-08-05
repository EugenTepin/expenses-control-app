import expensesControlApp from '../reducers';
import { addItem, deleteItem } from '../actions';
import data from '../data';
const initialState = { items: data };

it('Reducer reterns correct initial state', () => {
    expect(expensesControlApp(void 0, void 0)).toEqual(initialState);
});

it('Reducer reterns previous state if action is unknown or undefined', () => {
    expect(expensesControlApp(initialState, { type: 'UNKNOWN_TYPE' })).toEqual(initialState);
});

it('Reducer handles ADD_NEW_ITEM action correctly', () => {
    let item = {
        id: 99,
        category: 'test',
        expenses: '500',
        incomes: '1000'
    };
    let result = expensesControlApp(initialState, addItem(item));
    expect(result).toEqual({ items: [...initialState.items, item] });
});


it('Reducer handles DELETE_ITEM action correctly', () => {
    let id = 1;
    let itemsAfter = initialState.items.slice(1);
    let result = expensesControlApp(initialState, deleteItem(id));

    expect(result).toEqual({ items: itemsAfter });
});