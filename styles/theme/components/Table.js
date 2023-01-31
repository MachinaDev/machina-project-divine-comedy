// Component style overrides for Td

const Table = {
	parts: ['td'],
	// 1. We can update the base styles
	baseStyle: {
		td: {
			textAlign: 'center', // default is start
			// fontSize: 'lg',
		},
	},

	// 2. We can add a new Td size or extend existing
	sizes: {},
	// 3. We can add a new visual variant
	variants: {},
	// 6. We can overwrite defaultProps
	defaultProps: {},
};

export default Table;
