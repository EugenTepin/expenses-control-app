import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AddItemForm from 'components/AddItemForm';


describe('AddItemForm', () => {
    const add = jest.fn();
    const e = { preventDefault: () => { } };


    let wrapper = null

    beforeEach(() => {
        add.mockClear()
        wrapper = shallow(<AddItemForm add={add} />);
    })



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

    it('AddItemForm handles category input change', () => {
        wrapper.find('input[name="category"]').simulate('change', { target: { value: 'new test category' } });
        expect(wrapper.state().category).toBe('new test category');
    });

    it('AddItemForm handles expenses input change', () => {
        wrapper.find('input[name="expenses"]').simulate('change', { target: { value: 44 } });
        expect(wrapper.state().expenses).toBe(44);
    });

    it('AddItemForm checks expenses input validity', () => {
        wrapper.setState({ expenses: 50 });
        wrapper.find('input[name="expenses"]').simulate('change', { target: { value: 'str' } });
        expect(wrapper.state().expenses).toBe(50);
    });

    it('AddItemForm handles incomes input change', () => {
        wrapper.find('input[name="incomes"]').simulate('change', { target: { value: 22 } });
        expect(wrapper.state().incomes).toBe(22);
    });

    it('AddItemForm checks incomes input validity', () => {
        wrapper.setState({ incomes: 50 })
        wrapper.find('input[name="incomes"]').simulate('change', { target: { value: 'str' } });
        expect(wrapper.state().incomes).toBe(50);
    });



})



