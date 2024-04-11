import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Router } from './routes/Router';
import './common.scss';
import 'material-icons/iconfont/material-icons.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Router />
		<App />
	</BrowserRouter>
);
