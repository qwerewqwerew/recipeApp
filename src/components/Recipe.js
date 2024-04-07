import React from 'react';
import './Recipe.css';
const Recipe = ({ name, img_s, img_l }) => {
	//console.log(name, img_s);
	return (
		<>
			<div className='list'>
				<img src={img_s} alt={name} />
				<span>{name}</span>
			</div>
		</>
	);
};
export default Recipe;
