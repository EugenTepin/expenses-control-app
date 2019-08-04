export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function addItem(id, category, expenses, incomes) {
    return {
        id,
        category,
        expenses,
        incomes,
        type: ADD_NEW_ITEM
    }
}

export function deleteItem(id) {
    return {
        id,
        type: DELETE_ITEM
    }
}

