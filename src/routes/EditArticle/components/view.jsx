import * as React from 'react';
import './components.scss';
import { FileModuleLayout } from '../../../layouts/FileModuleLayout/FileModuleLayout';
import { Row, Col, DatePicker } from 'antd';
import { actions as reducer_actions } from "../modules/reducer";
import { ArticleFormComponent } from './editModalForm';
const RangePicker = DatePicker.RangePicker;
export class FileModuleListView extends React.Component {
    componentDidMount() {
        this.props.dispatch(reducer_actions.check_permission(this.props.params.id));
    }
    render() {
        return (<FileModuleLayout {...this.props}>
        <Row type="flex" justify="center">
          <h1>修改文章</h1>
        </Row>
        <Row type="flex" justify="start">
          <Col span={16} offset={2}>
            <ArticleFormComponent dispatch={this.props.dispatch} menu={this.props.menu} article_id={this.props.params.id} edit_article={this.props.edit_article}/>
          </Col>
        </Row>
      </FileModuleLayout>);
    }
}
export default FileModuleListView;
//# sourceMappingURL=view.jsx.map