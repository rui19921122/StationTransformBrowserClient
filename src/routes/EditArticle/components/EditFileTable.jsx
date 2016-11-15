import { Table, Button } from 'antd';
import * as React from 'react';
import { actions } from '../modules/reducer';
import './style.scss';
export class EditFileTable extends React.Component {
    render() {
        const columns = [
            {
                key: 'index',
                title: '序号',
                width: '10%',
                render: (c, i, index) => index + 1
            },
            {
                key: 'name',
                width: '70%',
                dataIndex: 'name',
                render: (r, c, i) => {
                    return <a href={c.file}>{c.name}</a>;
                }
            },
            {
                key: 'operate',
                width: '20%',
                title: '操作',
                render: (r, c, i) => {
                    return <Button onClick={() => this.props.dispatch(actions.delete_file(c.id, this.props.article_id))}>删除</Button>;
                }
            }
        ];
        return (<Table className="table" bordered columns={columns} dataSource={this.props.article.article.files}/>);
    }
}
//# sourceMappingURL=EditFileTable.jsx.map