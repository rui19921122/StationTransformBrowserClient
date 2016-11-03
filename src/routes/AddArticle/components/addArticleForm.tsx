import {Form, Button, Select, Input, Icon, Cascader} from 'antd';
import * as React from 'react';
import {MenuStoreInterface, actions as menu_actions} from '../../../store/global_reducers/menu';
import {FormComponent, ComponentDecorator} from "antd/lib/form/Form";
import {actions} from './../modules/reducer'
import {Editor} from '../../../components/Editor/editor'
interface props {
  dispatch: any,
  menu: MenuStoreInterface,
  form?: any
}
const FormItem = Form.Item;

class ArticleForm extends React.Component<props,any> {
  constructor(props) {
    super(props);
  }


  render() {
    const get_node_name = (id: number)=> {
      for (let num of this.props.menu.list) {
        if (num.id == id) {
          return {name: num.name, url: num.url}
        }
      }
    };

    const render_single_node = (item)=> {
      const {name, url} = get_node_name(item.id);
      let _ = [];
      if (item.children.length > 0) {
        return {
          'value': item.id,
          'label': get_node_name(item.id).name,
          'children': item.children.map(render_single_node)
        };
      } else {
        return {
          'value': item.id,
          'label': get_node_name(item.id).name,
          'children': []
        }
      }
    };
    const options = this.props.menu.sort.map(render_single_node);
    const handleSubmit = (e)=> {
      e.preventDefault();
      this.props.form.validateFields((err, values)=> {
        if (err) {
          return
        }
        const menu_list: number[] = values.menu;
        const content = values.content;
        const title = values.title;
        const menu_id = menu_list[menu_list.length - 1];
        this.props.dispatch(actions.new_article(title, menu_id, content));
        console.log(menu_id)
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
                   autoComplete={'off'}
            />
          )}
        </FormItem>
        <FormItem label="目录"
          {...formItemLayout}>
          {getFieldDecorator('menu', {
            rules: [{required: true, message: '请选择目录', type: 'array'}],
          })(
            <Cascader options={options}/>
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
