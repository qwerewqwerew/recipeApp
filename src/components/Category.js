import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import List from './List';
const CategoryPage = () => {
	let { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	if (id === '국&찌개') {
		id = '국';
	}
	useEffect(() => {
		const getDB = async () => {
			try {
				const { data } = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/30/RCP_PAT2=${id}`);
				const {
					COOKRCP01: { row },
				} = data;
				const initData = row.map(({ RCP_SEQ, RCP_NM, RCP_WAY2, RCP_PAT2, INFO_ENG, ATT_FILE_NO_MAIN, ATT_FILE_NO_MK }) => ({
					id: RCP_SEQ,
					name: RCP_NM,
					eng: INFO_ENG,
					way: RCP_WAY2,
					part: RCP_PAT2,
					imgs: { main_s: ATT_FILE_NO_MAIN, main_l: ATT_FILE_NO_MK },
				}));

				setData(initData);
			} catch (error) {
				console.error('데이터를 불러오는데 실패했습니다.', error);
			} finally {
				setLoading(false);
			}
		};
		getDB();
	}, [id]);
	return (
		<div className='inner'>
			{loading ? (
				<Title h1='로딩중입니다.' />
			) : (
				<>
					{id === '국' ? <Title h2={`${id}&찌개 레시피`} /> : <Title h2={`${id} 레시피`} />}
					<div className='list'>
						<List items={data} />
					</div>
				</>
			)}
		</div>
	);
};

export default CategoryPage;
