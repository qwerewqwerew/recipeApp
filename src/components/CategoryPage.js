import { useParams } from 'react-router-dom';
import Category from './Category';

const CategoryPage = () => {
	const { part } = useParams();
	const data = [];
	const title = part;

	return <Category title={title} data={data} />;
};

export default CategoryPage;
