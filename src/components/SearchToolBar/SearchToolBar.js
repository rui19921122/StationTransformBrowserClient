"use strict";
const React = require('react');
const antd_1 = require('antd');
const RangePicker = antd_1.DatePicker.RangePicker;
require('./style.scss');
const moment = require('moment');
const react_router_redux_1 = require('react-router-redux');
class SearchToolBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            'start': moment().add(-7, 'days'),
            'end': moment(),
            'search': ''
        };
    }
    render() {
        const handleSearchButtonClick = () => {
            this.props.dispatch(this.props.actions.search(this.props.menu_id, this.state.search, this.state.start, this.state.end));
        };
        const dropdownMenu = React.createElement(antd_1.Menu, {onClick: (key) => {
            const today = moment();
            let start;
            if (key.key == '1') {
                start = moment().add(-1, 'months');
            }
            else if (key.key == '2') {
                start = moment().add(-3, 'months');
            }
            else if (key.key == '3') {
                start = moment().add(-1, 'years');
            }
            this.props.dispatch(this.props.actions.search(this.props.menu_id, this.state.search, start, today));
        }}, 
            React.createElement(antd_1.Menu.Item, {key: "1"}, "近一个月"), 
            React.createElement(antd_1.Menu.Item, {key: "2"}, "近三个月"), 
            React.createElement(antd_1.Menu.Item, {key: "3"}, "近一年"));
        const handleAddButtonClick = () => {
            this.props.dispatch(this.props.actions.add(this.props.menu_id));
        };
        return (React.createElement(antd_1.Row, {type: "flex", justify: "center", className: "toolbar"}, 
            React.createElement(antd_1.Col, {span: 6}, 
                React.createElement(RangePicker, {defaultValue: [this.state.start, this.state.end], onChange: (dates) => this.setState({
                    start: dates[0],
                    end: dates[1]
                })})
            ), 
            React.createElement(antd_1.Col, {span: 3}, 
                React.createElement(antd_1.Input, {placeholder: "搜索", value: this.state.search, onChange: (e) => {
                    let value = e.target.value;
                    value == this.state.search.slice(0, -1) ? this.setState({ search: '' }) : this.setState({ search: value });
                }})
            ), 
            React.createElement(antd_1.Col, {className: "search_button"}, 
                React.createElement(antd_1.Dropdown.Button, {overlay: dropdownMenu, onClick: handleSearchButtonClick, icon: "search"}, "搜索")
            ), 
            React.createElement(antd_1.Col, {className: "search_button"}, 
                React.createElement(antd_1.Button, {icon: "plus", onClick: () => this.props.dispatch(react_router_redux_1.push('/add-article/'))}, "添加")
            )));
    }
}
exports.SearchToolBar = SearchToolBar;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchToolBar;
