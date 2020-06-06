import React, { Component } from 'react';
import Checkbox from './Checkbox/Checkbox'

export default class CheckboxContainer extends Component {
    constructor() {
        super()
        this.state = {
            checked: false
        }
    }
    handleOnPress = () => this.setState({checked: !this.state.checked})
    render() {
        return (
            <Checkbox 
                checked={this.state.checked} 
                setCheck={this.handleOnPress}
                size={50}
                disabled={false}
            />
        )
    }
}