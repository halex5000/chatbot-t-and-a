import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from '@mantine/core';
import App from './App';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>

		<MantineProvider theme={{colorScheme: 'dark'}} withGlobalStyles withNormalizeCSS>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
