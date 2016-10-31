/**
 * Created by Administrator on 2016/10/23.
 */
import * as React from 'react'
import {Table} from 'antd';
import {ArticleTable} from '../../../components/ArticleTable/ArticleTable';
import {TableColumnConfig} from "antd/lib/table/Table";
import {ArticleStoreInterface, actions} from '../../../store/global_reducers/articles';
interface props {
  dispatch: any,
  location: any,
  articles: ArticleStoreInterface
}
export class ArticleDisplay extends React.Component<props,void> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(actions.get_articles(0));
  }

  render() {
    return (
      <ArticleTable articles={this.props.articles}
                    dispatch={this.props.dispatch}
                    menu_id={0}
      />
    )
  }
}
export default ArticleDisplay
