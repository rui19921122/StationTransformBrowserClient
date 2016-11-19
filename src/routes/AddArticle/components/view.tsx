import * as React from "react";
import "./components.scss";
import {FileModuleLayout} from "../../../layouts/FileModuleLayout/FileModuleLayout";
import {Row, Col, DatePicker} from "antd";
import {MenuStoreInterface, actions} from "../../../store/global_reducers/menu";
import {ArticleFormComponent} from "./addArticleForm";
interface props {
  dispatch: any,
  menu: MenuStoreInterface,
  location: any,
  user: any
}
const RangePicker = (DatePicker as any).RangePicker;

export class FileModuleListView extends React.Component<props,{}> {
  componentDidMount() {
    if (this.props.menu && this.props.menu.list.length > 0) {
    } else {
      this.props.dispatch(actions.update_menu())
    }
    // this.props.dispatch(article_actions.get_articles(0));
  }

  render() {
    return (
      <FileModuleLayout {...this.props}>
        <Row type="flex" justify="center">
          <h1>添加文章</h1>
        </Row>
        <Row type="flex" justify="start">
          <Col span={ 16 } offset={2}>
            <ArticleFormComponent {...this.props} />
          </Col>
        </Row>
      </FileModuleLayout>
    )
  }

}

export default FileModuleListView
