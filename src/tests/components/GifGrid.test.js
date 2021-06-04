import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('GifGrid:', () => {
	test('should render correctly', () => {
        useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});
		const wrapper = shallow(<GifGrid category="One Punch Man" />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should show items when it loads', async () => {
		const gifs = [{
			id: 'ABC',
			url: 'http://asdasdd.com',
			title: 'asadaad'
		}];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		})
		const wrapper = shallow(<GifGrid category="One Punch Man" />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
