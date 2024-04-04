import { useState, useEffect } from 'react';
function App() {
	const [loading, setLoading] = useState({ state: true, data: [] });
	console.log(loading);
	useEffect(() => {
		//레시피데이터로딩
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);
	return <div className='App'>{loading ? <h1>로딩중입니다...</h1> : <h1> 요리에몽</h1>}</div>;
}

export default App;
