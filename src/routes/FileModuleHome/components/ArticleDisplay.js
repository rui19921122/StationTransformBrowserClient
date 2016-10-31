"use strict";
/**
 * Created by Administrator on 2016/10/23.
 */
const React = require('react');
const antd_1 = require('antd');
class ArticleDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.props.dispatch(actions.get_articles(this.props.location.params));
    }
    render() {
        const headers = [
            { title: "test" },
        ];
        return (React.createElement(antd_1.Table, {columns: headers, dataSource: this.props.articles.articles, loading: this.props.articles.fetching}));
    }
}
exports.ArticleDisplay = ArticleDisplay;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArticleDisplay;
