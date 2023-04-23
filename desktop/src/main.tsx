import * as React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import SceneLayout from './pages/Layout/Layout';
import PageLoad from './pages/404';
import './core.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const coreRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <PageLoad />
	},
	{
		path: '/layout',
		element: <SceneLayout />
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={coreRouter} />
		{/* <App /> */}
	</React.StrictMode>
);
