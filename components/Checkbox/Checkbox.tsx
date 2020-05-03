import React, { Fragment, Component } from 'react';
import { CheckBox } from 'react-native-elements';

interface CheckboxProps {
	checked: boolean;
	setCheck: Function;
	size?: number; // default = 18
	disabled?: boolean;  // default = false
};

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            disabled: true,
            size: 50
        }
    }

    isDisplayed = () => {
        let checkboxComponent = 
            <CheckBox 
                size={this.state.size}
            />
    
        if (this.state.disabled) {
            checkboxComponent = 
                <CheckBox size={this.state.size} 
                    checked={this.state.checked} 
                    onPress={() => this.setState({checked: !this.state.checked})} 
                />;
        } 
        return (checkboxComponent)
    } 

    handleOnPress = () => this.setState({checked: !this.state.checked})
    disabled = false;
    render() {
        return (
            <Fragment>
                {this.isDisplayed()}
            </Fragment>
        )
    } 
}
export default Checkbox;