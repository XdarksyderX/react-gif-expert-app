import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

const setCategories = jest.fn();

describe('AddCategory', () => {
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should display correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should change the text box', () => {
		const input = wrapper.find('input');
        const value = '';

		input.simulate('change', {
			target: {
				value,
			},
		});
	});

    test('shouldn`t post the information ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setcategories and clean the inputValue box', () => {
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: 'Hola Mundo'
            }
        })
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');
    });

    
});
