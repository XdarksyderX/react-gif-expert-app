import React from 'react'
import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('GifExpertApp: ', () => {
    

    test('Should render correctly', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should display a categories list', () => {
        const initialStateCategories = ['One Punch Man', 'Dragon Ball'];
        const realUseState = React.useState;


        jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(initialStateCategories))

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(initialStateCategories.length);
    })
});