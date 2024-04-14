import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './common.scss';
import 'material-icons/iconfont/material-icons.css';
import App from './App';
import { Router } from './routes/Router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
		<Router />
	</BrowserRouter>
);
