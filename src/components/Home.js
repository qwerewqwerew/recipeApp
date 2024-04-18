import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import Title from './Title';
import List from './List';
const Home = () => {
	const value = useContext(RecipeContext);

	// 데이터가 없는 경우 처리
	if (!value) {
		return null;
	}
	return (
		<>
			<div className='home'>
				<div className='inner'>
					<div className='logo'>
						<Link to={'/'}>
							<Title h1='도레미레시피' />
						</Link>
					</div>
					<Title h2={'추천레시피'} />
					<div className='list'>
						{value.slice(0, 20).map((item) => (
							<List items={[item]} key={item.id} />
						))}
					</div>
					<Title h2={'인기레시피'} />
					<div className='list'>
						{value.slice(21, 40).map((item) => (
							<List items={[item]} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
