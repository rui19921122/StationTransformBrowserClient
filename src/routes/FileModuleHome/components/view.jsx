import * as React from 'react';
import './components.scss';
import { FileModuleLayout } from '../../../layouts/FileModuleLayout/FileModuleLayout';
import { ArticleTable } from '../../../components/ArticleTable/ArticleTable';
import { SearchToolBar } from '../../../components/SearchToolBar/SearchToolBar';
import { Row, Col, DatePicker } from 'antd';
import { actions as article_actions } from "../../../store/global_reducers/articles";
const RangePicker = DatePicker.RangePicker;
export class FileModuleListView extends React.Component {
    componentDidMount() {
        this.props.dispatch(article_actions.get_articles(0));
    }
    render() {
        return (<FileModuleLayout {...this.props}>
        <Row type="flex" justify="center">
          <h1>所有文章</h1>
        </Row>
        <SearchToolBar dispatch={this.props.dispatch} menu_id={0} actions={{
            search: article_actions.get_articles,
            add: article_actions.get_articles
        }}/>
        <Row type="flex" justify="center" align="middle">
          <Col span={20}>
            <ArticleTable articles={this.props.articles} dispatch={this.props.dispatch} menu_id={0}/></Col>
        </Row>
      </FileModuleLayout>);
    }
}
export default FileModuleListView;
//# sourceMappingURL=view.jsx.map