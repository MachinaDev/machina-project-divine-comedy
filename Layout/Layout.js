import { Header, Footer } from '../components';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<Box h='100vh'>
			<Header />
			<main>{children}</main>
			<Box position='sticky' bottom='0' w='100%'>
				<Footer />
			</Box>
		</Box>
	);
};

export default Layout;
