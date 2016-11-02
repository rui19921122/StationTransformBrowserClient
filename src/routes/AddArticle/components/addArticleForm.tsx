import {Form, Button, Select, Input, Icon, Cascader} from 'antd';
import * as React from 'react';
import {MenuStoreInterface, actions as menu_actions} from '../../../store/global_reducers/menu';
import {FormComponent, ComponentDecorator} from "antd/lib/form/Form";
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
            let disabled;
            let _ = [];
            disabled = this.props.menu.managed.indexOf(item.id) >= 0;
            if (item.children.length > 0) {
                return {
                    'value': item.id,
                    'label': get_node_name(item.id).name,
                    'disabled': !disabled,
                    'children': item.children.map(render_single_node)
                };
            } else {
                return {
                    'value': item.id,
                    'label': get_node_name(item.id).name,
                    'disabled': !disabled,
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
                console.log(values);
            });
        };
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 7},
            wrapperCol: {span: 12},
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
                <FormItem
                    label="内容"
                >
                    {getFieldDecorator('content', {})(
                        <Editor />
                    )}
                </FormItem>
                <FormItem label="目录"
                    {...formItemLayout}>
                    {getFieldDecorator('menu', {})(
                        <Cascader options={options}/>
                    )}
                </FormItem>
                <Button onClick={()=>this.props.form.submit}>submit</Button>
            </Form>
        )
    }
}
export const ArticleFormComponent = Form.create({})(ArticleForm);
export default ArticleFormComponent
