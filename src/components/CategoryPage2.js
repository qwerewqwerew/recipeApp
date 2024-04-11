import { useParams } from 'react-router-dom';

const CategoryPage = () => {
	const { part } = useParams();
	return (
		<>
			<div>{part}</div>
		</>
	);
};
export default CategoryPage;
