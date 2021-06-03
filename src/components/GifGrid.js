import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<div className="gif-grid animate__animated animate__bounceInDown">
			<h3>{category}</h3>
			{loading && <p className="animate__animated animate__fadeIn animate__infinite">Loading...</p>}
			<ul className="gifs-container">
				{images.map((img) => {
					return <GifGridItem key={img.id} img={img} />;
				})}
			</ul>
		</div>
	);
};
