import * as React from 'react';
import {Table} from 'antd';
import {actions, ArticleStoreInterface} from '../../store/global_reducers/articles';
interface props {
  articles: ArticleStoreInterface;
  dispatch: any;
  menu_id: number;//加载的menu id，如为0则加载所有文章
}
const columns = [
  {
    title: '序号',
    render: (obj, array, index)=>index + 1,
    width: '10%'
  },
  {title: '标题', dataIndex: 'name', width: '20%'},
  {title: '发布人', dataIndex: 'create_person', width: '15%'},
  {
    title: '所属菜单', render: (obj, array, index)=> {
  }, width: '30%'
  },
];
export class ArticleTable extends React.Component<props,any> {
  render() {
    return (
      <Table
        columns={columns}
        loading={this.props.articles.fetching_articles}
        dataSource={this.props.articles.articles}
      />
    )
  }
}

export default ArticleTable
