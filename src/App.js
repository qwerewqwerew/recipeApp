import { useState, useEffect } from 'react';
import { fetchDb } from './fetch';

function App() {
	const [loading, setLoading] = useState({ state: true, data: [] });
	useEffect(() => {
		const loadDB = async () => {
			const data = await fetchDb();
			setLoading({ state: false, data: data });
		};
		setTimeout(() => {
			loadDB();
		}, 500);
	}, []);
	//console.log(loading.data);

	return (
		<div className='App'>
			{loading.state ? (
				<h1>로딩중입니다...</h1>
			) : (
				loading.data.map((a) => (
					<div key={a.id}>
						<span>{a.title}</span>
						<span>{a.userId}</span>
					</div>
				))
			)}
		</div>
	);
}

export default App;
