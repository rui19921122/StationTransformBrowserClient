import * as React from "react";
import {ListMenu} from "src/components/ListMenu/menu";
import {Row, Col} from "antd";
import "../../styles/core.scss";

export class FileModuleLayout extends React.Component<any,any> {
  render() {
    return (
      <Row style={{minHeight:'700px'}}>
        <Col span={4}>
          <ListMenu dispatch={this.props.dispatch} menu={this.props.menu}
                    user={this.props.user}
          />
        </Col>
        <Col span={20}>
          {this.props.children}
        </Col>
      </Row>
    )
  }
}
export default FileModuleLayout
