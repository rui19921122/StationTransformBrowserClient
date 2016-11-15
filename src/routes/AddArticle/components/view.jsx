import * as React from 'react';
import './components.scss';
import { FileModuleLayout } from '../../../layouts/FileModuleLayout/FileModuleLayout';
import { Row, Col, DatePicker } from 'antd';
import { actions } from "../../../store/global_reducers/menu";
import { ArticleFormComponent } from './addArticleForm';
const RangePicker = DatePicker.RangePicker;
export class FileModuleListView extends React.Component {
    componentDidMount() {
        if (this.props.menu && this.props.menu.list.length > 0) {
        }
        else {
            this.props.dispatch(actions.update_menu());
        }
    }
    render() {
        return (<FileModuleLayout {...this.props}>
        <Row type="flex" justify="center">
          <h1>添加文章</h1>
        </Row>
        <Row type="flex" justify="start">
          <Col span={16} offset={2}>
            <ArticleFormComponent {...this.props}/>
          </Col>
        </Row>
      </FileModuleLayout>);
    }
}
export default FileModuleListView;
//# sourceMappingURL=view.jsx.map