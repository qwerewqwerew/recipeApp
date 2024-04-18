import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title';
import List from '../components/List';
const CategoryPage = () => {
	const { id } = useParams();

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		const getDB = async () => {
			try {
				const { data } = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/30/RCP_PAT2=${id}`);
				const {
					COOKRCP01: { row },
				} = data;
				const initData = row.map(({ RCP_SEQ, RCP_NM, RCP_WAY2, RCP_PAT2, INFO_WGT, INFO_ENG, INFO_CAR, INFO_PRO, INFO_FAT, INFO_NA, HASH_TAG, ATT_FILE_NO_MAIN, ATT_FILE_NO_MK, RCP_PARTS_DTLS, MANUAL01, MANUAL_IMG01, MANUAL02, MANUAL_IMG02, MANUAL03, MANUAL_IMG03, MANUAL04, MANUAL_IMG04, MANUAL05, MANUAL_IMG05, MANUAL06, MANUAL_IMG06, MANUAL07, MANUAL_IMG07, MANUAL08, MANUAL_IMG08, MANUAL09, MANUAL_IMG09, MANUAL10, MANUAL_IMG10, RCP_NA_TIP, category }) => ({
					id: RCP_SEQ,
					name: RCP_NM,
					wgt: INFO_WGT,
					ingredient: RCP_PARTS_DTLS,
					eng: INFO_ENG,
					car: INFO_CAR,
					pro: INFO_PRO,
					fat: INFO_FAT,
					na: INFO_NA,
					way: RCP_WAY2,
					part: RCP_PAT2,
					hash: HASH_TAG,
					imgs: { main_s: ATT_FILE_NO_MAIN, main_l: ATT_FILE_NO_MK },
					manual: { desc: [MANUAL01, MANUAL02, MANUAL03, MANUAL04, MANUAL05, MANUAL06, MANUAL07, MANUAL08, MANUAL09, MANUAL10], img: [MANUAL_IMG01, MANUAL_IMG02, MANUAL_IMG03, MANUAL_IMG04, MANUAL_IMG05, MANUAL_IMG06, MANUAL_IMG07, MANUAL_IMG08, MANUAL_IMG09, MANUAL_IMG10] },
					tip: RCP_NA_TIP,
					category: ['반찬', '국', '후식', '일품'],
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
			<Title h2={`${id} 레시피`} />
			{loading ? (
				<>
					<Title h1='로딩중입니다.' />
				</>
			) : (
				<div className="list">
					<List items={data} />
				</div>
			)}
		</div>
	);
};

export default CategoryPage;
