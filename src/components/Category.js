import Recipe from './Recipe';
import Title from './Title';

const Category = ({ data, title }) => {
	return (
		<>
			<Title h2={title} />
			<article className='group'>
				{data.map(({ id, name, imgs: { main_s, main_l }, category: { part } }) => (
					<Recipe key={id} name={name} img_s={main_s} img_l={main_l} cate={part} />
				))}
			</article>
		</>
	);
};

export default Category;
