import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface  CheckboxProps {
    checked: boolean;
    setCheck: Function;
    size?: number; // default = 18
    disabled?: boolean;  // default = false
};

const Checkbox = ({
    checked,
    setCheck,
    size = 18,
    disabled = false
}: CheckboxProps) => {
    <CheckBox 
        onPress={setCheck} 
        size={size} 
        disabled={disabled}
        checked={checked}
    />
}

export default Checkbox;