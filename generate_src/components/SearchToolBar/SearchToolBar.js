"use strict";
const React = require("react");
const antd_1 = require("antd");
require("./style.scss");
const moment_1 = require("moment");
const react_router_redux_1 = require("react-router-redux");
const RangePicker = antd_1.DatePicker.RangePicker;
const DropdownButton = antd_1.Dropdown.Button;
class SearchToolBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            'start': moment_1.default().add(-7, 'days'),
            'end': moment_1.default(),
            'search': ''
        };
    }
    render() {
        const handleSearchButtonClick = () => {
            this.props.dispatch(this.props.actions.search(this.props.menu_id, this.state.search, this.state.start, this.state.end));
        };
        const dropdownMenu = React.createElement(antd_1.Menu, { onClick: (key) => {
                const today = moment_1.default();
                let start;
                if (key.key == '1') {
                    start = moment_1.default().add(-1, 'months');
                }
                else if (key.key == '2') {
                    start = moment_1.default().add(-3, 'months');
                }
                else if (key.key == '3') {
                    start = moment_1.default().add(-1, 'years');
                }
                this.props.dispatch(this.props.actions.search(this.props.menu_id, this.state.search, start, today));
            } },
            React.createElement(antd_1.Menu.Item, { key: "1" }, "\u8FD1\u4E00\u4E2A\u6708"),
            React.createElement(antd_1.Menu.Item, { key: "2" }, "\u8FD1\u4E09\u4E2A\u6708"),
            React.createElement(antd_1.Menu.Item, { key: "3" }, "\u8FD1\u4E00\u5E74"));
        const handleAddButtonClick = () => {
            this.props.dispatch(this.props.actions.add(this.props.menu_id));
        };
        return (React.createElement(antd_1.Row, { type: "flex", justify: "center", className: "toolbar" },
            React.createElement(antd_1.Col, { span: 6 },
                React.createElement(RangePicker, { defaultValue: [this.state.start, this.state.end], onChange: (dates) => this.setState({
                        start: dates[0],
                        end: dates[1]
                    }) })),
            React.createElement(antd_1.Col, { span: 3 },
                React.createElement(antd_1.Input, { placeholder: "搜索", value: this.state.search, onChange: (e) => {
                        let value = e.target.value;
                        value == this.state.search.slice(0, -1) ? this.setState({ search: '' }) : this.setState({ search: value });
                    } })),
            React.createElement(antd_1.Col, { className: "search_button" },
                React.createElement(DropdownButton, { overlay: dropdownMenu, onClick: handleSearchButtonClick, icon: "search" }, "\u641C\u7D22")),
            React.createElement(antd_1.Col, { className: "search_button" },
                React.createElement(antd_1.Button, { icon: "plus", onClick: () => this.props.dispatch(react_router_redux_1.push('/add-article/')) }, "\u6DFB\u52A0"))));
    }
}
exports.SearchToolBar = SearchToolBar;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchToolBar;
//# sourceMappingURL=SearchToolBar.js.map