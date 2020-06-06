import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import EndOfScrollWrapper from './EndOfScrollWrapper';
import styles from './ScrollContainer.styles';

interface ScrollContainerProps {
	onScrollToEnd?: Function;
  onPress?: Function;
  setChecked?: Function;
  documentText: string;
  checked: boolean;
  checkboxSize?: number;
  displayCheckbox?: boolean;
  checkboxLabel?: string;
  styleContainer?: any;
	styleDocumentText?: any;
  styleCheckboxLabel?: any;
}

export default function ScrollContainer({
	onScrollToEnd = () => {},
  onPress = () => {},
  setChecked = () => {},
  checkboxSize,
  documentText,
  displayCheckbox = true,
  checked,
  checkboxLabel,
	styleContainer,
	styleDocumentText,
  styleCheckboxLabel,
}: ScrollContainerProps) {
	
	return (
    <EndOfScrollWrapper onScrollToEnd={onScrollToEnd} style={styleContainer}>
        <Text style={styleDocumentText}>{documentText}</Text>
        { displayCheckbox &&
          <>
            <CheckBox checked={checked} onPress={onPress}/>
            <Text style={styleCheckboxLabel}>{checkboxLabel}</Text>
          </>
        }
    </EndOfScrollWrapper>
	);
}

