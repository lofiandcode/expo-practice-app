import { StyleSheet } from 'react-native';
import typography from '../../util/typography';
import * as colors from '../../util/colors';

const INPUT_PADDING_HORIZONTAL = 10;
const INPUT_HEIGHT = 48;

export default StyleSheet.create({
	wrapper: {
		width: '100%',
		height: 400,
		borderWidth: 4,
		borderStyle: 'solid',
		borderColor: colors.NAVY_BLUE,
		backgroundColor: 'pink',
	},
	documentText: {
		fontSize: 42,
	},
	checkboxLabel: {
		...typography.body4,
	}
});
