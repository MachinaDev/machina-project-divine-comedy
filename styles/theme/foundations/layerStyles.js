// Layer Styles
import { mode } from '@chakra-ui/theme-tools';

// In most projects you might find yourself repeating specific layer properties (bg, color, shadow).
// Layer Styles allow you to save a combination of styling attributes to re-use in other components.
// Once created, pass the layerStyle prop to any component and chakra will resolve the styles accordingly.
// Properties defined in a layer style :
// - Color or text color
// - Background color
// - Border width and border color
// - Box shadow
// - Opacity

const layerStyles = {
	base: {
		bg: 'gray.50',
		border: '2px solid',
		borderColor: 'gray.500',
	},
	selected: {
		bg: 'teal.500',
		color: 'teal.700',
		borderColor: 'orange.500',
	},
};
export default layerStyles;
