const Recipe = ({ name, img_s, img_l, cate }) => {
	return (
		<>
			<div className='list'>
				<img src={img_s} alt={name} />
				<div className='text_wrap'>
					<span className='body_lg'>{name}</span>
					<span className='body_sm badge'>{cate}</span>
				</div>
			</div>
		</>
	);
};
export default Recipe;
