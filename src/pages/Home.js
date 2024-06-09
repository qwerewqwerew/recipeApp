import { Link } from 'react-router-dom';

const Home = (props) => {
	return (
		<>
			<h1>Home</h1>
			<Link to='/products'>LINK-Product</Link>
			<a href='/products'>Products</a>
		</>
	);
};
export default Home;
