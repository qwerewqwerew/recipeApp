import { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Category from '../components/Category';
import DetailApi from '../components/DetailApi';
import { RecipeContext } from '../context/RecipeContext';

const Router = () => {
	return (
		<>
			<Navigate />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/category/:id' element={<Category />} />
				<Route path='/detail/:id' element={<DetailApi />} />
			</Routes>
		</>
	);
};
const Navigate = () => {
	const data = useContext(RecipeContext);
	// 모든 category를 하나의 배열로 합친 후, Set을 사용하여 중복 제거
	const uniquePart = [...new Set(data.flatMap((el) => el.part))];
	return (
		<div className='gnb'>
			<div className='inner'>
				<div className='menu'>
					<Link to={'/'}>홈화면</Link>
					{uniquePart.map((el, idx) => {
						return (
							<Link key={idx} to={`/category/${encodeURIComponent(el)}`}>
								{el}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export { Router, Navigate };
