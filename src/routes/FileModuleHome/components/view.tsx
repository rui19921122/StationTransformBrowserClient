import * as React from 'react'
import './components.scss'
import {FileModuleLayout} from '../../../layouts/FileModuleLayout/FileModuleLayout';
import {ArticleTable} from '../../../components/ArticleTable/ArticleTable';
import {Dispatch} from "redux";
import {MenuStoreInterface} from "../../../store/global_reducers/menu";
import {ArticleStoreInterface, actions as article_actions} from "../../../store/global_reducers/articles";
interface props {
  dispatch: any,
  menu: MenuStoreInterface,
  articles: ArticleStoreInterface,
  location: any
}

export class FileModuleListView extends React.Component<props,any> {
  componentDidMount() {
    this.props.dispatch(article_actions.get_articles(0));
  }

  render() {
    return (
      <FileModuleLayout {...this.props}>
        <ArticleTable articles={this.props.articles}
                      dispatch={this.props.dispatch}
                      menu_id={0}
        />
      </FileModuleLayout>
    )
  }

}

export default FileModuleListView
