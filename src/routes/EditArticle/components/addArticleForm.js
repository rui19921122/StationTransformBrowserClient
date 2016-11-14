"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const antd_1 = require('antd');
const React = require('react');
const reducer_1 = require('./../modules/reducer');
const editor_1 = require('../../../components/Editor/editor');
const FormItem = antd_1.Form.Item;
class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const get_node_name = (id) => {
            for (let num of this.props.menu.list) {
                if (num.id == id) {
                    return { name: num.name, url: num.url };
                }
            }
        };
        const render_single_node = (item) => {
            const { name, url } = get_node_name(item.id);
            let _ = [];
            if (item.children.length > 0) {
                return {
                    'value': item.id,
                    'label': get_node_name(item.id).name,
                    'children': item.children.map(render_single_node)
                };
            }
            else {
                return {
                    'value': item.id,
                    'label': get_node_name(item.id).name,
                    'children': []
                };
            }
        };
        const options = this.props.menu.sort.map(render_single_node);
        const handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (err) {
                    return;
                }
                const menu_list = values.menu;
                const content = values.content;
                const title = values.title;
                const menu_id = menu_list[menu_list.length - 1];
                this.props.dispatch(reducer_1.actions.new_article(title, menu_id, content));
                console.log(menu_id);
            });
        };
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 8 },
        };
        return (React.createElement(antd_1.Form, {onSubmit: handleSubmit, horizontal: true}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "标题"}), getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入标题' }],
        })(React.createElement(antd_1.Input, {type: "text", placeholder: "标题", autoComplete: 'off'}))), React.createElement(FormItem, __assign({label: "目录"}, formItemLayout), getFieldDecorator('menu', {
            rules: [{ required: true, message: '请选择目录', type: 'array' }],
        })(React.createElement(antd_1.Cascader, {options: options}))), React.createElement(FormItem, {label: "内容"}, getFieldDecorator('content', {})(React.createElement(editor_1.Editor, null))), React.createElement(FormItem, null, React.createElement(antd_1.Button, {type: "primary", htmlType: "submit", className: "login-form-button"}, "提交"), React.createElement("span", null, "  "), "附件上传需提交后才再上传")));
    }
}
exports.ArticleFormComponent = antd_1.Form.create({})(ArticleForm);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ArticleFormComponent;
