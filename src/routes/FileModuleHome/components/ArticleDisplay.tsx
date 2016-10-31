/**
 * Created by Administrator on 2016/10/23.
 */
import * as React from 'react'
import {Table} from 'antd';
import {TableColumnConfig} from 'antd/lib/Table/Table'
import {ListArticlesStoreInterface, actions} from './../modules/reducer'
interface props {
  dispatch: any,
  location: any,
  articles: ListArticlesStoreInterface
}
export class ArticleDisplay extends React.Component<props,void> {
  constructor(props) {
    super(props)
  }

  private componentDidMount() {
    // this.props.dispatch(actions.get_articles(this.props.location.params));
  }

  render() {
    const headers: TableColumnConfig[] = [
      {title: "test"},
    ];

    return (
      <Table columns={headers}
             dataSource={this.props.articles.articles}
             loading={this.props.articles.fetching}
      >
      </Table>
    )
  }
}
export default ArticleDisplay
