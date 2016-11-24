"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const antd_1 = require("antd");
const React = require("react");
const reducer_1 = require("./../modules/reducer");
const editor_1 = require("../../../components/Editor/editor");
const EditFileTable_1 = require("./EditFileTable");
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
            throw Error("not found");
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
                this.props.dispatch(reducer_1.actions.put_article(title, parseInt(this.props.article_id), content));
            });
        };
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 17 },
        };
        let button_disabled;
        if (this.props.edit_article.article) {
        }
        return (this.props.edit_article.article && this.props.edit_article.article.id ?
            React.createElement("div", null,
                React.createElement(antd_1.Form, { onSubmit: handleSubmit, horizontal: true },
                    React.createElement(FormItem, __assign({}, formItemLayout, { label: "标题" }), getFieldDecorator('title', {
                        initialValue: this.props.edit_article.article.name,
                        rules: [{ required: true, message: '请输入标题' }],
                    })(React.createElement(antd_1.Input, { type: "text", placeholder: "标题", autoComplete: 'off' }))),
                    React.createElement(FormItem, __assign({ label: "目录" }, formItemLayout), getFieldDecorator('menu', {
                        initialValue: this.props.edit_article.article.menu
                    })(React.createElement(antd_1.Input, { disabled: true }))),
                    React.createElement(FormItem, { label: "内容" }, getFieldDecorator('content', {
                        initialValue: this.props.edit_article.article.content
                    })(React.createElement(editor_1.Editor, { initial_value: this.props.edit_article.article.content, key: this.props.article_id }))),
                    React.createElement(FormItem, null,
                        React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", className: "login-form-button", disabled: this.props.edit_article.article.content === this.props.form.getFieldValue('content') &&
                                this.props.edit_article.article.name === this.props.form.getFieldValue('title') }, "\u63D0\u4EA4"),
                        React.createElement(antd_1.Upload, { action: `/api/article/${this.props.article_id}/files/`, showUploadList: false, onChange: (info) => {
                                if (info.file.status == 'done') {
                                    this.props.dispatch(reducer_1.actions.reload_files(parseInt(this.props.article_id)));
                                }
                            } },
                            React.createElement(antd_1.Button, { type: "ghost", size: "large" }, "\u4E0A\u4F20\u9644\u4EF6")))),
                React.createElement(EditFileTable_1.EditFileTable, { article_id: parseInt(this.props.article_id), dispatch: this.props.dispatch, article: this.props.edit_article }))
            : React.createElement("div", null, "loading"));
    }
}
exports.ArticleFormComponent = antd_1.Form.create({})(ArticleForm);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ArticleFormComponent;
//# sourceMappingURL=editModalForm.js.map