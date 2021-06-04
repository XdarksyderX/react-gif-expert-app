import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
	return (
		<div className="card animate__animated animate__fadeIn animate__delay-1s">
			<img src={url} alt={title} />
			<p> {title} </p>
		</div>
	);
};

GifGridItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}