import * as React from 'react';
import { Table } from 'antd';
import './style.scss';
import { push } from 'react-router-redux';
const columns = [
    {
        title: '序号',
        key: 'index',
        render: (obj, array, index) => index + 1,
        width: '10%'
    },
    {
        title: '标题',
        key: 'title',
        dataIndex: 'name',
        width: '30%'
    },
    {
        title: '发布人',
        key: 'create_person',
        dataIndex: 'create_person',
        width: '15%'
    },
    {
        title: '时间',
        key: 'time',
        dataIndex: 'create_time',
        width: '10%',
        render: (obj) => {
            return obj.split('T')[0];
        }
    },
    {
        title: '所属菜单',
        key: 'menu',
        render: (obj, array, index) => {
            return obj.menu || '回收站';
        },
        width: '15%'
    }, {
        title: '操作',
        key: 'operate',
        render: (obj, array, index) => {
        },
        width: '20%'
    }
];
export class ArticleTable extends React.Component {
    render() {
        return (<Table className="table" bordered columns={columns} loading={this.props.articles.fetching_articles} dataSource={this.props.articles.articles} onRowClick={(value) => this.props.dispatch(push(`/article/${value.id}/edit/`))} rowKey="id"/>);
    }
}
export default ArticleTable;
//# sourceMappingURL=ArticleTable.jsx.map