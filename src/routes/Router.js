import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';

const css = { fontSize: '3rem', maxWidth: '500px', margin: 'auto', display: 'flex', gap: '2rem' };

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Anchor />
		</>
	);
};
const Anchor = () => {
	return (
		<div style={css}>
			<Link to={'/'}>Home</Link>
			<Link to={'/diary'}>Diary</Link>
			<Link to={'/edit'}>Edit</Link>
			<Link to={'/new'}>New</Link>
		</div>
	);
};
export { Router };
