import './ListGroup.css';
import Recipe from './Recipe';
import Title from './Title';
const ListGroup = ({ data }) => {
	const title = ['반찬', '국\u0026찌개', '후식', '일품'];
	const side = data.filter((item) => item.category.part === title[0]).slice(0, 6);
	const soup = data.filter((item) => item.category.part === title[1]).slice(0, 6);
	const dessert = data.filter((item) => item.category.part === title[2]).slice(0, 6);
	const special = data.filter((item) => item.category.part === title[3]).slice(0, 6);
	return (
		<>
			<Title title={title[0]} />
			<article className='group'>
				{side.map(({ id, name, imgs: { main_s, main_l }, category: { part } }) => (
					<Recipe key={id} name={name} img_s={main_s} img_l={main_l} cate={part} />
				))}
			</article>
			<Title title={title[1]} />
			<article className='group'>
				{soup.map(({ id, name, imgs: { main_s, main_l }, category: { part } }) => (
					<Recipe key={id} name={name} img_s={main_s} img_l={main_l} cate={part} />
				))}
			</article>
			<Title title={title[2]} />
			<article className='group'>
				{dessert.map(({ id, name, imgs: { main_s, main_l }, category: { part } }) => (
					<Recipe key={id} name={name} img_s={main_s} img_l={main_l} cate={part} />
				))}
			</article>
			<Title title={title[3]} />
			<article className='group'>
				{special.map(({ id, name, imgs: { main_s, main_l }, category: { part } }) => (
					<Recipe key={id} name={name} img_s={main_s} img_l={main_l} cate={part} />
				))}
			</article>
		</>
	);
};
export default ListGroup;
