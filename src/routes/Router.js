import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import CategoryPage from '../components/CategoryPage';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/category/:part' element={<CategoryPage />} />
			</Routes>
			<Anchor />
		</>
	);
};
const Anchor = () => {
	return (
		<div>
			<Link to={'/'}>Home</Link>
			<Link to={'/category/:part'}>category</Link>
		</div>
	);
};
export { Router, Anchor };
