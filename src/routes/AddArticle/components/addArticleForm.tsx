import {Form, Button, Select, Input} from "antd";
import * as React from "react";
import {MenuStoreInterface} from "src/store/global_reducers/menu";
import {actions} from "./../modules/reducer";
import {Editor} from "src/components/Editor/editor";
import {UserStoreInterface} from "src/store/global_reducers/user";
interface props {
  dispatch: any,
  menu: MenuStoreInterface,
  form?: any,
  user: UserStoreInterface
}
const FormItem = Form.Item;

const Option = Select.Option;
class ArticleForm extends React.Component<props,any> {
  constructor(props) {
    super(props);
  }


  render() {
    const get_node_name = (id: number) => {
      for (let num of this.props.menu.list) {
        if (num.id == id) {
          return {name: num.name, url: num.url}
        }
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (err) {
          return
        }
        const menu_id: number = values.menu;
        const content = values.content;
        const title = values.title;
        this.props.dispatch(actions.new_article(title, menu_id, content));
      });
    };
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 2},
      wrapperCol: {span: 8},
    };
    return (
      <Form onSubmit={handleSubmit}
            horizontal
      >
        <FormItem
          {...formItemLayout}
          label="标题"
        >
          {getFieldDecorator('title', {
            rules: [{required: true, message: '请输入标题'}],
          })(
            <Input type="text" placeholder="标题"
                   id="title"
                   autoComplete={'off'}
            />
          )}
        </FormItem>
        <FormItem label="目录"
          {...formItemLayout}>
          {getFieldDecorator('menu', {
            rules: [{required: true, message: '请选择目录', type: 'string'}],
          })(
            <Select >{this.props.menu.list.map(value =><Option
              key={value.id+'select'}
              disabled={!((this.props.user.managed_menu as any).includes(value.id)||(this.props.user.admin_menu as any).includes(value.id))}
              value={value.id.toString()}>{value.name}</Option>)}</Select>
          )}
        </FormItem>
        <FormItem
          label="内容"
        >
          {getFieldDecorator('content', {})(
            <Editor />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            提交
          </Button>
          <span>  </span>附件上传需提交后才再上传
        </FormItem>
      </Form>
    )
  }
}
export const ArticleFormComponent = Form.create({})(ArticleForm);
export default ArticleFormComponent
