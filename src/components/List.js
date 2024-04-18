import { Link } from 'react-router-dom';

const List = ({ items }) => {
	return (
		<>
			{items.map(({ imgs: { main_s }, name, way, id, eng }) => {
				return (
					<div key={id} className='item'>
						<Link to={`/detail/${name}`}>
							<div className='item_img'>
								<img src={main_s} alt={name} />
							</div>
							<div className='item_text'>
								<span className='h3'>{name}</span>
								<span className='item_text_sub'>
									<span className='etc'>
										<span className='material-icons-outlined'>bolt</span> {eng}
										<i>kal</i>
									</span>
									<span className='etc'>
										<span className='material-icons-outlined'>soup_kitchen</span>
										{way}
									</span>
								</span>
							</div>
						</Link>
					</div>
				);
			})}
		</>
	);
};
export default List;
