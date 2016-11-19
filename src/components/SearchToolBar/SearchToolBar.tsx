import * as React from "react";
import {Row, Col, DatePicker, Input, Button, Dropdown, Menu} from "antd";
import "./style.scss";
import * as moment from "moment";
import {push} from "react-router-redux";
interface props {
  dispatch: any,
  actions: {
    search: Function
    add: Function
  },
  menu_id: number
}
const RangePicker = (DatePicker as any).RangePicker;
const DropdownButton = Dropdown.Button;

export class SearchToolBar extends React.Component<props,any> {
  state = {
    'start': moment().add(-7, 'days'),
    'end': moment(),
    'search': ''
  };

  render() {
    const handleSearchButtonClick = () => {
      this.props.dispatch(this.props.actions.search(
        this.props.menu_id,
        this.state.search,
        this.state.start,
        this.state.end
      ));
    };
    const dropdownMenu = <Menu
      onClick={(key)=>{
            const today = moment();
            let start;
            if(key.key=='1'){
            start = moment().add(-1,'months')
            }else if(key.key=='2'){
            start = moment().add(-3,'months')
            }else if(key.key=='3'){
            start = moment().add(-1,'years')
            }
            this.props.dispatch(this.props.actions.search(
                this.props.menu_id,
                this.state.search,
                start,
                today
            ));
            }
            }
    >
      <Menu.Item key="1">近一个月</Menu.Item>
      <Menu.Item key="2">近三个月</Menu.Item>
      <Menu.Item key="3">近一年</Menu.Item>
    </Menu>;
    const handleAddButtonClick = () => {
      this.props.dispatch(this.props.actions.add(this.props.menu_id))
    };
    return (
      <Row type="flex" justify="center" className="toolbar">
        <Col span={6}>
          <RangePicker defaultValue={[this.state.start,this.state.end]}
                       onChange={(dates)=>this.setState({
                       start:dates[0],
                       end:dates[1]
                       })}
          />
        </Col>
        <Col span={3}>
          <Input placeholder="搜索"
                 value={this.state.search}
                 onChange={(e:any)=>{
                 let value:string = e.target.value;
                 value==this.state.search.slice(0,-1)?this.setState({search:''}):this.setState({search:value})}
                 }
          />
        </Col>
        <Col className="search_button">
          <DropdownButton
            overlay={dropdownMenu}
            onClick={handleSearchButtonClick}
            icon="search"
          >搜索</DropdownButton>
          {/*<Button icon="search"*/}
          {/*onClick={handleSearchButtonClick}*/}
          {/*>搜索</Button>*/}
        </Col>
        <Col className="search_button">
          <Button icon="plus"
                  onClick={()=>this.props.dispatch(push('/add-article/'))}
          >添加</Button>
        </Col>
      </Row>
    )
  }

}
export default SearchToolBar
