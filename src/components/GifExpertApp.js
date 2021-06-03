import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

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
