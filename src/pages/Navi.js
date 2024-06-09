import { Link } from 'react-router-dom';
import './Navi.css';
const Navi = () => {
	return (
		<ul>
			<li>
				<Link to='/home'>Home</Link>
			</li>
			<li>
				<Link to='/products'>Products</Link>
			</li>
		</ul>
	);
};
export default Navi;
