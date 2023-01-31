// theme/index.js
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
// Link Styles : https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/styles.ts
import styles from './styles';

// Foundational style overrides
// Link foundations: https:github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations
import config from './foundations/config';

// Colors Styles overrides
import colors from './foundations/colorPalette';
import borders from './foundations/borders';
// Text Styles ovverides
import textStyles from './foundations/textStyles';
// Layer Styles ovverides
import layerStyles from './foundations/layerStyles';

// Component style overrides
// Link components : https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/components

import Button from './components/button';
import Table from './components/Table';

// Component Creation
import Card from './components/card';

const overrides = {
	// Global Styles here
	styles,
	// Config Styles here
	config,
	// Colors Palette here
	colors,
	// Layer Styles here
	layerStyles,
	// Text Styles here
	textStyles,
	// Foundational style overrides go here
	borders,
	// Components go here
	components: {
		Button,
		Card,
		Table,
	},
};

export default extendTheme(overrides);
