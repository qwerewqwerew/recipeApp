import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../App';

import './List.css';

const List = () => {
	const { data, loading } = useContext(DataContext);

	if (loading) {
		return <h1>데이터 로드 중 입니다.</h1>;
	}
	return (
		<div className='group'>
			{data.map(({ RCP_SEQ, RCP_NM, ATT_FILE_NO_MAIN, RCP_WAY2 }) => (
				<Link key={RCP_SEQ} to={`/recipe/${RCP_SEQ}`}>
					<div className='list'>
						<img src={ATT_FILE_NO_MAIN} alt={RCP_NM} />
						<div className='list-txt-wrap'>
							<div className='list-txt-title'>{RCP_NM}</div>
							<div className='list-txt-way'>{RCP_WAY2}</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default List;
