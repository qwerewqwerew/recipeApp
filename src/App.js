import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [loading, setLoading] = useState({ state: true, data: [] });
	const getDB = async () => {
		try {
			const { data } = await axios.get('http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/100');
			const {	COOKRCP01: { row } } = data;
			setLoading({ state: false, data: row });
		} catch (error) {
			console.error('데이터를 불러오는데 실패했습니다.', error);
		}
	};
	useEffect(() => {
		getDB();
	}, []);

	return (
		<div className='App'>
			{loading.state ? (
				<h1>로딩중입니다...</h1>
			) : (
				loading.data.map((a) => (
					<div key={a.RCP_SEQ}>
						<span style={{ color: 'red' }}>{a.RCP_NM}</span>
						<span>{a.RCP_WAY2}</span>
					</div>
				))
			)}
		</div>
	);
}

export default App;
