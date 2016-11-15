"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var antd_1 = require('antd');
var user_1 = require('../../store/global_reducers/user');
var FormItem = antd_1.Form.Item;
var LoginInForm = (function (_super) {
    __extends(LoginInForm, _super);
    function LoginInForm() {
        _super.apply(this, arguments);
    }
    LoginInForm.prototype.handleSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        this.props.form.validateFields(function (err, values) {
            if (!err) {
                _this.props.dispatch(user_1.actions.login(values['username'], values['password']));
            }
        });
    };
    LoginInForm.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return (<antd_1.Form inline onSubmit={this.handleSubmit.bind(this)}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
        })(<antd_1.Input addonBefore={<antd_1.Icon type="user"/>} placeholder="Username"/>)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
        })(<antd_1.Input addonBefore={<antd_1.Icon type="lock"/>} type="password" placeholder="Password"/>)}
        </FormItem>
        <FormItem>
          <antd_1.Button type="primary" htmlType="submit" loading={this.props.user.fetching}>登陆</antd_1.Button>
        </FormItem>
      </antd_1.Form>);
    };
    return LoginInForm;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = antd_1.Form.create()(LoginInForm);
//# sourceMappingURL=LoginInForm.jsx.map