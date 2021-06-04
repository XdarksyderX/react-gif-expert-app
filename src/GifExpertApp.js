import React from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = (  ) => {
	const [categories, setCategories] = React.useState([]);

	return (
		<div className="app">
			<h2>GifExpertApp</h2>
			
			<AddCategory setCategories={setCategories}/>
            <ul>
                {categories.map(cat => <GifGrid key={cat} category={cat}/>)}
            </ul>
			<hr />
		</div>
	);
};
