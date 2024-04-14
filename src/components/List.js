const List = (props) => {
	console.log(props);
	return (
		<div className='list'>
			{props.item.slice(0, 6).map(({ imgs: { main_s }, name, category: { way }, id, nutrition }) => {
				return (
					<div key={id} className='item'>
						<div className='item_img'>
							<img src={main_s} alt={name} />
						</div>
						<div className='item_text'>
							<span className='h3'>{name}</span>
							<span className='item_text_sub'>
								<span className='etc'>
									<span class='material-icons-outlined'>bolt</span> {nutrition.eng}
									<i>kal</i>
								</span>
								<span className='etc'>
									<span class='material-icons-outlined'>soup_kitchen</span>
									{way}
								</span>
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default List;
