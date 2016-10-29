/**
 * Created by Administrator on 2016/10/23.
 */
export interface MenuItemInterface {
  name: string,
  parent: void|number,
  id: number,
  url: string
}
export interface detailItemInterface {
  id: number,
  children: detailItemInterface[]
}
