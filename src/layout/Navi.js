import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';

const Navi = () => {
	const { data, loading } = useContext(DataContext);

	if (loading) {
		return <h1>데이터 로드 중 입니다.</h1>;
	}

	const categories = [...new Set(data.map((item) => item.RCP_WAY2))];

	return (
		<nav>
			<ul>
				<li>
					<Link to={`/`}>Home</Link>
				</li>
				{categories.map((category) => (
					<li key={category}>
						<Link to={`/category/${category}`}>{category}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navi;
