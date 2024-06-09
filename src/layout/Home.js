import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';
import Title from '../components/Title';
import List from '../components/List';

const Home = () => {
	const { data, loading } = useContext(DataContext);

	if (loading) {
		return <h1>데이터 로드 중 입니다.</h1>;
	}

	if (!data || data.length === 0) {
		return <h1>데이터 준비 중 입니다.</h1>;
	}

	const categories = [...new Set(data.map((item) => item.RCP_WAY2))];

	return (
		<>
			{categories.map((category) => (
				<Fragment key={category}>
					<Title title={category} />
					<List data={data.filter((item) => item.RCP_WAY2 === category)} />
				</Fragment>
			))}
		</>
	);
};



export default Home;
