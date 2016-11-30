import * as React from "react";
import "./components.scss";
import {FileModuleLayout} from "src/layouts/FileModuleLayout/FileModuleLayout";
import {ArticleTable} from "src/components/ArticleTable/ArticleTable";
import {SearchToolBar} from "src/components/SearchToolBar/SearchToolBar";
import {Row, Col, DatePicker} from "antd";
import {MenuStoreInterface} from "src/store/global_reducers/menu";
import {ArticleStoreInterface, actions as article_actions} from "src/store/global_reducers/articles";
import {UserStoreInterface} from "src/store/global_reducers/user";
interface props {
  dispatch: any,
  menu: MenuStoreInterface,
  articles: ArticleStoreInterface,
  location: any,
  params: {
    id: string
  },
  user: UserStoreInterface
}
const RangePicker = (DatePicker as any).RangePicker;

export class FileModuleListView extends React.Component<props,any> {
  componentDidMount() {
    this.props.dispatch(article_actions.get_articles(parseInt(this.props.params.id)));
  }

  componentWillReceiveProps(nextProps) {
    let nextAccountId = nextProps.params.id;
    if (nextAccountId !== this.props.params.id) {
      this.props.dispatch(article_actions.get_articles(nextAccountId));
    }
  }

  render() {
    let menu = this.props.menu.list.find((value) => value.id == parseInt(this.props.params.id)) || {name: ''};
    return (
      <FileModuleLayout
        {...this.props}>
        {this.props.menu.list.length > 0 ?<div>
          {/*当请求到menu后再加载，为了防止渲染失败*/}
          <Row type="flex" justify="center">
            <h1>{menu.name}</h1>
          </Row>
          <SearchToolBar dispatch={this.props.dispatch}
                         menu_id={parseInt(this.props.params.id)}
                         actions={{
                       search:article_actions.get_articles,
                       add:article_actions.get_articles
        }}/>
          <Row type="flex" justify="center" align="middle">
            <Col span={20}>
              <ArticleTable articles={this.props.articles}
                            dispatch={this.props.dispatch}
                            menu_id={0}
              /></Col>
          </Row></div>: ''}
      </FileModuleLayout>
    )
  }

}

export default FileModuleListView
