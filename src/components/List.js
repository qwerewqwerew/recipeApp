const List = (props) => {
	return (
		<div className='list'>
			{props.item.map(({ imgs: { main_s }, name, category:{part}, id }) => {
				return (
					<div key={id} className='item'>
						<img src={main_s} alt={name} />
						<span className='body_lg'>{name}</span>
						<span className='body_sm badge'>{part}</span>
					</div>
				);
			})}
		</div>
	);
};
export default List;
