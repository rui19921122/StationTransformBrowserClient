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
        this.props.dispatch(article_actions.get_articles(parseInt(this.props.params.id)));
    }
    componentWillReceiveProps(nextProps) {
        var nextAccountId = nextProps.params.id;
        if (nextAccountId !== this.props.params.id) {
            this.props.dispatch(article_actions.get_articles(nextAccountId));
        }
    }
    render() {
        return (<FileModuleLayout {...this.props}>
        {this.props.menu.list.length > 0 ? <div>
          
        <Row type="flex" justify="center">
          <h1>{this.props.menu.list.find((value) => value.id == parseInt(this.props.params.id)).name}</h1>
        </Row>
        <SearchToolBar dispatch={this.props.dispatch} menu_id={parseInt(this.props.params.id)} actions={{
            search: article_actions.get_articles,
            add: article_actions.get_articles
        }}/>
        <Row type="flex" justify="center" align="middle">
          <Col span={20}>
            <ArticleTable articles={this.props.articles} dispatch={this.props.dispatch} menu_id={0}/></Col>
        </Row></div> : ''}
      </FileModuleLayout>);
    }
}
export default FileModuleListView;
//# sourceMappingURL=view.jsx.map