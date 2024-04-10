import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Diary from './page/Diary';
import Edit from './page/Edit';
import Home from './page/Home';
import New from './page/New';
const css = { fontSize: '3rem', maxWidth: '500px', margin: 'auto' ,display:"flex", gap:'2rem'};

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/diary/:id' element={<Diary />} />
				<Route path='/edit' element={<Edit />} />
				<Route path='/new' element={<New />} />
			</Routes>
			<Anchor />
		</BrowserRouter>
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
