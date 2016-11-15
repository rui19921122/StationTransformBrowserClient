"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_rte_1 = require('react-rte');
require('./components.scss');
var Editor = (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            value: this.props.initial_value ? react_rte_1.default.createValueFromString(this.props.initial_value, 'html') : react_rte_1.default.createEmptyValue()
        };
        this.onChange = function (value) {
            _this.setState({ value: value });
            if (_this.props.onChange) {
                // Send the changes up to the parent component as an HTML string.
                // This is here to demonstrate using `.toString()` but in a real app it
                // would be better to avoid generating a string on each change.
                _this.props.onChange(value.toString('html'));
            }
        };
    }
    Editor.prototype.componentDidMount = function () {
        console.log(555);
    };
    Editor.prototype.render = function () {
        return (<react_rte_1.default key={this.props.article_id + 'editor'} editorClassName="editor-display" value={this.state.value} onChange={this.onChange}/>);
    };
    return Editor;
}(React.Component));
exports.Editor = Editor;
//# sourceMappingURL=editor.jsx.map