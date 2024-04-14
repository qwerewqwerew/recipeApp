import { useContext, Fragment } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import Title from './Title';
import List from './List';
const Category = () => {
	const data = useContext(RecipeContext);
	if (data === null || data === undefined) {
		return;
	}

	return (
		<div className='category'>
			{data.map((item) => {
				return (
					<Fragment key={item.category}>
						<div className='inner'>
							<Title h2={item.category} />
							<List item={item.byType} />
						</div>
					</Fragment>
				);
			})}
		</div>
	);
};
export default Category;
