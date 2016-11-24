"use strict";
const antd_1 = require("antd");
const React = require("react");
const reducer_1 = require("../modules/reducer");
require("./style.scss");
class EditFileCusTable extends antd_1.Table {
}
class EditFileTable extends React.Component {
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
                    return React.createElement("a", { href: c.file }, c.name);
                }
            },
            {
                key: 'operate',
                width: '20%',
                title: '操作',
                render: (r, c, i) => {
                    return React.createElement(antd_1.Button, { onClick: () => this.props.dispatch(reducer_1.actions.delete_file(c.id, this.props.article_id)) }, "\u5220\u9664");
                }
            }
        ];
        return (React.createElement(EditFileCusTable, { className: "table", bordered: true, columns: columns, dataSource: this.props.article.article.files }));
    }
}
exports.EditFileTable = EditFileTable;
//# sourceMappingURL=EditFileTable.js.map