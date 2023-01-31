import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import '@fontsource/akshar';

import Layout from '../Layout/Layout';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
