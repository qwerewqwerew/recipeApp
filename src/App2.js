import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [loading, setLoading] = useState(true);
	const [rcpDB, setrcpDB] = useState([]);
	const getDB = async () => {
		try {
			const { data } = await axios.get('http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/100');
			const {
				COOKRCP01: { row },
			} = data;
			console.log(data);
			setLoading(false);
			setrcpDB(row); // 데이터를 row로 직접 설정
		} catch (error) {
			console.error('데이터를 불러오는데 실패했습니다.', error);
		}
	};
	useEffect(() => {
		getDB();
	}, []);

	return (
		<div className='App'>
			{loading ? ( // 로딩 상태 체크
				<h1>로딩중입니다...</h1>
			) : (
				rcpDB.map(
					(
						a // rcpDB 배열 직접 매핑
					) => (
						<div key={a.RCP_SEQ}>
							<span style={{ color: 'red' }}>{a.RCP_NM}</span>
							<span>{a.RCP_WAY2}</span>
						</div>
					)
				)
			)}
		</div>
	);
}

export default App;
