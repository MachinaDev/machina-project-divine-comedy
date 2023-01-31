// Global style overrides
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (props) => ({
		'html, body': {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: 'sm',
			bg: mode('white', 'gray.800')(props),
			color: mode('gray.800', 'gray.300')(props),
			lineHeight: 'base',
		},
		'*::placeholder': {
			color: mode('gray.400', 'whiteAlpha.400')(props),
		},
		'*, *::before, &::after': {
			borderColor: mode('gray.200', 'whiteAlpha.300')(props),
			wordWrap: 'break-word',
		},
		a: {
			color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
			_hover: {
				textDecoration: 'underline',
				fontFamily: `"Akshar", sans-serif;`,
			},
		},
	}),
};
export default styles;
