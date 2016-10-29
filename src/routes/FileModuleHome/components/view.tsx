import * as React from 'react'
import './components.scss'
import {FileModuleLayout} from '../../../layouts/FileModuleLayout/FileModuleLayout';
import {ArticleDisplay} from './ArticleDisplay'
import {Dispatch} from "redux";
import {MenuStoreInterface} from "../../../store/global_reducers/menu";
import {ListArticlesInterface} from '../modules/reducer';
interface props {
  dispatch: Dispatch<any>,
  menu: MenuStoreInterface,
  list_articles: ListArticlesInterface
}

export class FileModuleListView extends React.Component<props,any> {
  handle_items_click(url) {
    console.log(url)
  }

  render() {
    console.log(this.props);
    return (
      <FileModuleLayout handle_items_click={this.handle_items_click} {...this.props}>
        <ArticleDisplay dispatch={this.props.dispatch}/>
      </FileModuleLayout>
    )
  }

}

export default FileModuleListView
