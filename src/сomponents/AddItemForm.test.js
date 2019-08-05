import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AddItemForm from './AddItemForm';

const add = jest.fn();
let e = { preventDefault: () => { } };
const wrapper = shallow(<AddItemForm add={add} />);

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddItemForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('AddItemForm has required controls', () => {
    expect(wrapper.exists('[name="category"]')).toEqual(true);
    expect(wrapper.exists('[name="expenses"]')).toEqual(true);
    expect(wrapper.exists('[name="incomes"]')).toEqual(true);
    expect(wrapper.exists('[name="add"]')).toEqual(true);
});

it('AddItemForm cannot be submited with empty fields', () => {
    wrapper.instance().handleSubmit(e);
    expect(add).not.toHaveBeenCalled();
});

it('AddItemForm submits with proper state', () => {
    wrapper.setState({
        category: 'test',
        expenses: '100',
        incomes: '100'
    });
    wrapper.instance().handleSubmit(e);
    expect(add).toHaveBeenCalled();
});

