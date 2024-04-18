import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './common.scss';
import 'material-icons/iconfont/material-icons.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<App />
	</BrowserRouter>
);
