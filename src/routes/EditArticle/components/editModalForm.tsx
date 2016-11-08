import {Form, Button, Select, Input, Icon, Cascader, Upload} from 'antd';
import * as React from 'react';
import {MenuStoreInterface, actions as menu_actions} from '../../../store/global_reducers/menu';
import {FormComponent, ComponentDecorator} from "antd/lib/form/Form";
import {actions, EditArticleInterface} from './../modules/reducer'
import {Editor} from '../../../components/Editor/editor'
import {EditFileTable} from './EditFileTable';
interface props {
    dispatch: any,
    menu: MenuStoreInterface,
    form?: any,
    article_id: string,
    edit_article: EditArticleInterface
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
                this.props.dispatch(actions.put_article(title, parseInt(this.props.article_id), content));
                console.log(menu_id)
            });
        };
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 2},
            wrapperCol: {span: 17},
        };
        return (
          (this.props.edit_article.article && this.props.edit_article.article.id ?
                <div>
                    <Form onSubmit={handleSubmit}
                          horizontal
                    >
                        <FormItem
                            {...formItemLayout}
                            label="标题"
                        >
                            {getFieldDecorator('title', {
                                initialValue: this.props.edit_article.article.name,
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
                                initialValue: this.props.edit_article.article.menu
                            })(
                                <Input
                                    disabled={true}
                                />
                            )}
                        </FormItem>
                        <FormItem
                            label="内容"
                        >
                            {getFieldDecorator('content', {})(
                                <Editor initial_value={this.props.edit_article.article.content}
                                        key={this.props.article_id}
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                    disabled={
                                this.props.edit_article.article.content == this.props.form.getFieldValue('content') &&
                                this.props.edit_article.article.name == this.props.form.getFieldValue('title')
                                }
                            >
                                提交
                            </Button>
                            <Upload
                                action={`/api/article/${this.props.article_id}/files/`}
                                showUploadList={false}
                                onChange={(info)=>{
                                if(info.file.status=='done'){
                                this.props.dispatch(actions.reload_files(parseInt(this.props.article_id)))
                                }
                                }}
                            >
                                <Button type="ghost"
                                        size="large"
                                >
                                    上传附件
                                </Button>
                            </Upload>
                        </FormItem>
                    </Form>
                    <EditFileTable
                        article_id={parseInt(this.props.article_id)}
                        dispatch={this.props.dispatch}
                        article={this.props.edit_article}
                    />
                </div>
                :<div>loading</div>
        )
    }
}
export const ArticleFormComponent = Form.create({})(ArticleForm);
export default ArticleFormComponent
