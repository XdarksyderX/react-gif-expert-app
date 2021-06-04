import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('GifGrid', () => {
	const url = 'asasdd';
	const title = 'asdasd';

	let wrapper = shallow(<GifGridItem url={url} title={title} />);

	test('Show correctly the component', () => {
        wrapper = shallow(<GifGridItem url={url} title={title} />);
		expect(wrapper).toMatchSnapshot();
	});

    test('Should a paragraph with the title', () => {
        wrapper = shallow(<GifGridItem url={url} title={title} />);
        const paragraph = wrapper.find('p');
        expect(paragraph.text().trim()).toBe(title);
    });

    test('Image`s props in correct place ', () => {
        wrapper = shallow(<GifGridItem url={url} title={title} />);
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should have "animate__bounceInDown" animation', () => {
        wrapper = shallow(<GifGridItem url={url} title={title} />);
        const div = wrapper.find('div');
        const classes = div.prop('className');
        

        expect(classes.includes('animate__fadeIn')).toBe(true);
    })
    
    
    
});
