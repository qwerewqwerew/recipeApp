import { useState, useEffect } from 'react';
import Category from './Category';
import Title from './Title';

const Home = ({ data }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (data) {
			setLoading(false); // 데이터가 있으면 loading을 false.
		}
	}, [data]); // data가 변경될 때마다 이 useEffect 다시 실행.
	if (loading) {
		return false;
	}

	const categories = ['반찬', '국\u0026찌개', '후식', '일품'];
	const filterCategory = categories.map((category) => ({
		category,
		data: data.filter((item) => item.category.part === category).slice(0, 6),
	}));

	return (
		<>
			<Title h1='천만개의 레시피' />
			{filterCategory.map(({ category, data }) => (
				<Category key={category} title={category} data={data} />
			))}
		</>
	);
};

export default Home;
