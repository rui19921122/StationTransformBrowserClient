/**
 * Created by Administrator on 2016/10/23.
 */
import * as React from 'react'
import {Menu} from 'antd'
import {actions} from './MenuActions'
interface props {
  name: string,
  dispatch: any,
  menu: any
}
export const ListMenu = (props: props) => {
  props.dispatch(actions.GetMenuFromServer())
};
export default ListMenu
