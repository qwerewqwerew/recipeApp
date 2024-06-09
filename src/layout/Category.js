import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../App';
import Title from '../components/Title';
import List from '../components/List';
const Category = () => {
	const { data, loading } = useContext(DataContext);
	const { category } = useParams();

	if (loading) {
		return <h1>데이터 로드 중 입니다.</h1>;
	}

	const filteredData = data.filter((item) => item.RCP_WAY2 === category);

	return (
		<>
			<Title title={category} />
			<List data={filteredData} />
		</>
	);
};

export default Category;
