// Component style overrides for Button

const lightColor = 'black';
const darkColor = 'white';
const lightBgColor = 'red.300';
const darkBgColor = 'red.300';

const Button = {
	// 1. We can update the base styles
	baseStyle: {
		fontWeight: 'semibold', // Normally, it is "semibold"
		// color: 'yellow',
	},
	// 2. We can add a new button size or extend existing
	sizes: {
		// xl: {
		// 	h: '56px',
		// 	fontSize: 'lg',
		// 	px: '32px',
		// },
	},
	// 3. We can add a new visual variant
	variants: {
		// 4. We can override existing variants
		solid: (props) => ({
			// size: 'md',
			// color: props.colorMode === 'dark' ? darkColor : lightColor,
			// bg: props.colorMode === 'dark' ? lightBgColor : darkBgColor,
		}),
		outline: (props) => ({
			// bg: props.colorMode === 'dark' ? 'red.900' : 'red.500',
			// color: props.colorMode === 'dark' ? 'white' : 'black',
		}),
		ghost: (props) => ({
			// bg: props.colorMode === 'dark' ? 'white' : 'red.500',
			// color: props.colorMode === 'dark' ? 'white' : 'black',
			// border: '2px',
		}),
		link: (props) => ({
			// bg: props.colorMode === 'dark' ? 'white' : 'white',
			// color: props.colorMode === 'dark' ? 'white' : 'black',
		}),
		other: {
			color: 'white',
			bg: 'pink.400',
			border: '1px',
			borderColor: 'pink.200',
			boxShadow: '0 0 2px 2px #efdfde',
			_hover: {
				bg: 'yellow.800',
			},
			sm: {
				bg: 'teal.500',
				fontSize: 'md',
			},
		},
		// 5. We can add responsive variants
		sm: {
			bg: 'teal.500',
			fontSize: 'md',
		},
	},
	// 6. We can overwrite defaultProps
	defaultProps: {
		size: 'md', // default is md
		colorScheme: 'pink', // default is gray
		// variant: 'sm', // default is solid
	},
};

export default Button;
