import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import List from 'components/List';
import data from 'data';


describe('Testing List component', () => {
    window.confirm = jest.fn();


    let wrapper = null

    beforeEach(() => {
        window.confirm.mockClear()
        wrapper = shallow(<List items={data} />);
    })



    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List items={data} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    it('List has expected elements', () => {
        expect(wrapper.find('tbody>tr').length).toEqual(data.length);
    });

    it('List can react on delete item button', () => {
        wrapper.find('button.btn-danger').at(0).simulate('click');
        expect(window.confirm).toHaveBeenCalledTimes(1);
    });


})



