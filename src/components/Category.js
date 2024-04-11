import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import Title from './Title';

const Category = ({ data, title }) => {
	const navigate = useNavigate();
	const btnHandler = () => {
		navigate(`/category/${title}`, { state: { data: data } });
	};
	return (
		<div className='category'>
			<div className='category_title_wrap'>
				<Title h2={title} />
				<button onClick={() => btnHandler(title)}>
					<span className='material-icons-outlined'>more_horiz</span>
				</button>
			</div>
			<article className='category_group'>
				{data.map(({ id, name, imgs: { main_s, main_l }, category: { part } }) => (
					<Recipe key={id} name={name} img_s={main_s} img_l={main_l} cate={part} />
				))}
			</article>
		</div>
	);
};

export default Category;
