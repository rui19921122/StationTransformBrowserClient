import {Row, Col, Table, Button} from 'antd';
import * as React from 'react';
import {actions, EditArticleInterface} from '../modules/reducer';
import './style.scss'
interface props {
    dispatch: any,
    article: EditArticleInterface,
}
export class EditFileTable extends React.Component<props,any> {
    render() {
        const columns = [
            {
                key: 'index',
                title: '序号',
                width: '10%',
                render: (c, i, index)=>index + 1
            },
            {
                key: 'name',
                width: '70%',
                dataIndex: 'name',
                title: '附件名'
            },
            {
                key: 'operate',
                width: '20%',
                title: '操作',
                render: (r, c, i)=> {
                    return <Button onClick={()=>this.props.dispatch(actions.delete_file(c.id))}>删除</Button>
                }
            }
        ];
        return (
            <Table
                className="table"
                bordered
                columns={columns}
                dataSource={this.props.article.article.files}
            />
        )
    }
}