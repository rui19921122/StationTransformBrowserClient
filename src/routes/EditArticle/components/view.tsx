import * as React from 'react'
import './components.scss'
import {FileModuleLayout} from '../../../layouts/FileModuleLayout/FileModuleLayout';
import {Row, Col, DatePicker, Button, Input, Dropdown} from 'antd';
import {MenuStoreInterface, actions} from "../../../store/global_reducers/menu";
import {actions as reducer_actions} from "../modules/reducer"
import {ArticleFormComponent} from './editModalForm'
interface props {
  dispatch: any,
  menu: MenuStoreInterface,
  location: any,
  edit_article: any,
  params: any
}
const RangePicker = (DatePicker as any).RangePicker;

export class FileModuleListView extends React.Component<props,any> {
  componentDidMount() {
    if (this.props.menu && this.props.menu.list.length > 0) {
    } else {
      this.props.dispatch(reducer_actions.check_permission(this.props.params.id))
    }
  }

  render() {
    return (
      <FileModuleLayout {...this.props}>
        <Row type="flex" justify="center">
          <h1>修改文章</h1>
        </Row>
        <Row type="flex" justify="start">
          <Col span={ 16 } offset={2}>
            <ArticleFormComponent
              dispatch={this.props.dispatch}
              menu={this.props.menu}
              article_id={this.props.params.id}
              edit_article={this.props.edit_article}
            />
          </Col>
        </Row>
      </FileModuleLayout>
    )
  }

}

export default FileModuleListView
