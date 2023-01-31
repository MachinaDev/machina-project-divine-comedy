// Text Styles
import { mode } from '@chakra-ui/theme-tools';

// In most projects you might find yourself repeating specific text properties (font size, font weight, line height).
// The text styles functionality in Chakra makes it easy to repeatably apply a collection
// of text properties(like line height and size) to any component.
// You can put these styles in the theme under the textStyles key to make easy to re-use in the future.
// Properties defined in a text style :
// - Font family, weight, and size
// - Line height
// - Letter spacing
// - Text decoration (strikethrough and underline)
// - Text transform (uppercase, lowercase, and capitalization)

const textStyles = {
	h1: {
		// you can also use responsive styles
		fontSize: ['48px', '72px'],
		fontWeight: 'bold',
		lineHeight: '110%',
		letterSpacing: '-2%',
	},
	h2: {
		fontSize: ['36px', '48px'],
		fontWeight: 'semibold',
		lineHeight: '110%',
		letterSpacing: '-1%',
	},
};
export default textStyles;
