import './Error.css';
import Navi from './Navi';

const ErrorPage = (props) => {
	return (
		<>
			<Navi />
			<div className='error'>404Error</div>
		</>
	);
};
export default ErrorPage;
