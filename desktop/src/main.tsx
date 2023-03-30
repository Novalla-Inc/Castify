import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import theme from './theme/theme';
import './core.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ChakraProvider>
);
