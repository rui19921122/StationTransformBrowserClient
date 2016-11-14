"use strict";
/**
 * Created by Administrator on 2016/10/23.
 */
const React = require('react');
const ArticleTable_1 = require('../../../components/ArticleTable/ArticleTable');
const articles_1 = require('../../../store/global_reducers/articles');
class ArticleDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(articles_1.actions.get_articles(0));
    }
    render() {
        return (React.createElement(ArticleTable_1.ArticleTable, {articles: this.props.articles, dispatch: this.props.dispatch, menu_id: 0}));
    }
}
exports.ArticleDisplay = ArticleDisplay;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArticleDisplay;
