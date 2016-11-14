"use strict";
const React = require('react');
const react_rte_1 = require('react-rte');
require('./components.scss');
class Editor extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.initial_value ? react_rte_1.default.createValueFromString(this.props.initial_value, 'html') : react_rte_1.default.createEmptyValue()
        };
        this.onChange = (value) => {
            this.setState({ value });
            if (this.props.onChange) {
                // Send the changes up to the parent component as an HTML string.
                // This is here to demonstrate using `.toString()` but in a real app it
                // would be better to avoid generating a string on each change.
                this.props.onChange(value.toString('html'));
            }
        };
    }
    componentDidMount() {
        console.log(555);
    }
    render() {
        return (React.createElement(react_rte_1.default, {key: this.props.article_id + 'editor', editorClassName: "editor-display", value: this.state.value, onChange: this.onChange}));
    }
}
exports.Editor = Editor;
