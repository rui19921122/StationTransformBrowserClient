"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var antd_1 = require('antd');
var Item = antd_1.Menu.Item;
require('./style.scss');
var menu_1 = require('src/store/global_reducers/menu');
var MenuDropDown = (function (_super) {
    __extends(MenuDropDown, _super);
    function MenuDropDown() {
        _super.apply(this, arguments);
        this.state = {
            'add': true,
            'visible': false,
            'content': ''
        };
    }
    MenuDropDown.prototype.render = function () {
        var _this = this;
        var handleActions = function (e) {
            console.log(e.key);
            var key = e.key;
            var f = key.split('-');
            var action = f[3];
            if (action == "add") {
                _this.setState({ 'add': false });
            }
            else if (action == "delete") {
                _this.setState({ 'visible': false });
                _this.props.dispatch(menu_1.actions.delete_menu(_this.props.menu_id));
            }
            else if (action == "admin") {
            }
            else if (action == "convert") {
                _this.setState({ 'visible': false });
            }
            return;
        };
        var handleSubmitButtonClick = function (e) {
            _this.props.dispatch(menu_1.actions.add_menu(_this.state.content, _this.props.menu_id));
            e.stopPropagation();
        };
        var menu = <antd_1.Menu className="menu-setting" onClick={function (e) { return handleActions(e); }}>
      {this.state.add ?
            <Item key={"menu-settings-" + this.props.menu_id + "-add"}>
          增加子菜单
        </Item> :
            <Item key={"menu-settings-" + this.props.menu_id + "-dispatch"} style={{ width: '300px' }}>
          <antd_1.Input.Group>
            <antd_1.Input placeholder="点击空白区域可关闭" ref="input" onPressEnter={handleSubmitButtonClick} onChange={function (e) { return _this.setState({ 'content': e.target.value }); }}/>
            <div className="ant-input-group-wrap">
              <antd_1.Button icon="check-circle-o" onClick={handleSubmitButtonClick} disabled={this.state.content.length > 0 ? false : true} loading={this.props.menu.add_fetching} className="ant-search-btn justify-button">添加</antd_1.Button>
            </div>
          </antd_1.Input.Group>
        </Item>}
      <antd_1.Menu.Divider />
      <Item key={"menu-settings-" + this.props.menu_id + "-admin"}>管理管理员</Item>
      <antd_1.Menu.Divider />
      <Item key={"menu-settings-" + this.props.menu_id + "-convert"}>转让所有权</Item>
      <antd_1.Menu.Divider />
      <Item className="warn" key={"menu-settings-" + this.props.menu_id + "-delete"}>删除此目录</Item>
    </antd_1.Menu>;
        return (<antd_1.Dropdown overlay={menu} trigger={["click"]} onClick={function (e) { return e.stopPropagation(); }} onVisibleChange={function (flag) { return _this.state.visible ? _this.setState({ 'visible': false }) :
            _this.setState({ 'visible': flag, 'add': true, 'content': '' }); }} visible={this.state.visible}>
        <antd_1.Icon type="setting" onClick={function (e) { return _this.setState({
            'visible': !_this.state.visible,
        }); }} className="icon-settings"/>
      </antd_1.Dropdown>);
    };
    return MenuDropDown;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuDropDown;
//# sourceMappingURL=MenuDropDown.jsx.map