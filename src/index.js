import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router } from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Router />
		<App />
	</>
);
