import { Outlet } from 'react-router-dom';
import App from '../App';
import Navi from './Navi';

function Root() {
	return (
		<App>
			<Navi />
			<Outlet />
		</App>
	);
}

export default Root;
