import React, { Fragment, Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';

// interface CheckboxProps {
// 	checked: boolean;
// 	setCheck: Function;
// 	size?: number; // default = 18
// 	disabled?: boolean;  // default = false
// };

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked
        }
    }

    handleOnPress = () => this.setState({checked: !this.state.checked})

    isDisabled = () => {
        console.log("disabled = ", this.props.disabled)
        console.log("size = ", this.props.size)
        console.log("checked = ", this.state.checked)
            
        if (this.props.disabled) {
            return (
                <CheckBox 
                    Component={TouchableWithoutFeedback}
                    size={this.props.size}
                    center={true}
                    title={"I'm a Checkbox"}
                    iconRight={true}
                />
            )
        } 
        return (
            <CheckBox 
                Component={TouchableOpacity}
                size={this.props.size}
                checked={this.state.checked} 
                onPress={this.handleOnPress}
                center={true}
                title={"I'm a Checkbox"}
                iconRight={true}
            />
        )
    } 

    
    render() {
        return (
            <Fragment>
                {this.isDisabled()}
            </Fragment>
        )
    } 
}
export default Checkbox;