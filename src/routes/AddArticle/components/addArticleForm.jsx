"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var antd_1 = require('antd');
var React = require('react');
var reducer_1 = require('./../modules/reducer');
var editor_1 = require('../../../components/Editor/editor');
var FormItem = antd_1.Form.Item;
var Option = antd_1.Select.Option;
var ArticleForm = (function (_super) {
    __extends(ArticleForm, _super);
    function ArticleForm(props) {
        _super.call(this, props);
    }
    ArticleForm.prototype.render = function () {
        var _this = this;
        var get_node_name = function (id) {
            for (var _i = 0, _a = _this.props.menu.list; _i < _a.length; _i++) {
                var num = _a[_i];
                if (num.id == id) {
                    return { name: num.name, url: num.url };
                }
            }
        };
        var handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (err) {
                    return;
                }
                var menu_id = values.menu;
                var content = values.content;
                var title = values.title;
                _this.props.dispatch(reducer_1.actions.new_article(title, menu_id, content));
            });
        };
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 8 },
        };
        return (<antd_1.Form onSubmit={handleSubmit} horizontal>
        <FormItem {...formItemLayout} label="标题">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入标题' }],
        })(<antd_1.Input type="text" placeholder="标题" id="title" autoComplete={'off'}/>)}
        </FormItem>
        <FormItem label="目录" {...formItemLayout}>
          {getFieldDecorator('menu', {
            rules: [{ required: true, message: '请选择目录', type: 'string' }],
        })(<antd_1.Select>{this.props.menu.list.map(function (value) { return <Option key={value.id + 'select'} value={value.id.toString()}>{value.name}</Option>; })}</antd_1.Select>)}
        </FormItem>
        <FormItem label="内容">
          {getFieldDecorator('content', {})(<editor_1.Editor />)}
        </FormItem>
        <FormItem>
          <antd_1.Button type="primary" htmlType="submit" className="login-form-button">
            提交
          </antd_1.Button>
          <span>  </span>附件上传需提交后才再上传
        </FormItem>
      </antd_1.Form>);
    };
    return ArticleForm;
}(React.Component));
exports.ArticleFormComponent = antd_1.Form.create({})(ArticleForm);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ArticleFormComponent;
//# sourceMappingURL=addArticleForm.jsx.map