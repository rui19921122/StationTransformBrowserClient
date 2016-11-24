"use strict";
const React = require("react");
const antd_1 = require("antd");
const user_1 = require("../../store/global_reducers/user");
const FormItem = antd_1.Form.Item;
class LoginInForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(user_1.actions.login(values['username'], values['password']));
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log('当前状态为', this.props.user.fetching);
        setTimeout(() => console.log('1s后状态为', this.props.user.fetching), 1000);
        return (React.createElement(antd_1.Form, { inline: true, onSubmit: this.handleSubmit.bind(this) },
            React.createElement(FormItem, null, getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }],
            })(React.createElement(antd_1.Input, { addonBefore: React.createElement(antd_1.Icon, { type: "user" }), placeholder: "Username" }))),
            React.createElement(FormItem, null, getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
            })(React.createElement(antd_1.Input, { addonBefore: React.createElement(antd_1.Icon, { type: "lock" }), type: "password", placeholder: "Password", onPressEnter: e => this.handleSubmit(e) }))),
            React.createElement(FormItem, null,
                React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", loading: this.props.user.fetching }, "\u767B\u9646"))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = antd_1.Form.create()(LoginInForm);
//# sourceMappingURL=LoginInForm.js.map