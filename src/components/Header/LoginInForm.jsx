import * as React from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { actions } from '../../store/global_reducers/user';
const FormItem = Form.Item;
class LoginInForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(actions.login(values['username'], values['password']));
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (<Form inline onSubmit={this.handleSubmit.bind(this)}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
        })(<Input addonBefore={<Icon type="user"/>} placeholder="Username"/>)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
        })(<Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password"/>)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" loading={this.props.user.fetching}>登陆</Button>
        </FormItem>
      </Form>);
    }
}
export default Form.create()(LoginInForm);
//# sourceMappingURL=LoginInForm.jsx.map