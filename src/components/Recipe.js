import './Recipe.css';
const Recipe = ({ name, img_s, img_l, cate }) => {
	return (
		<>
			<div className='list'>
				<img src={img_s} alt={name} />
				<div className='text_wrap'>
					<span className='title_txt'>{name}</span>
					<span className='sub_txt'>{cate}</span>
				</div>
			</div>
		</>
	);
};
export default Recipe;
