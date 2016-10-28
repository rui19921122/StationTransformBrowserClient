/**
 * Created by Administrator on 2016/10/23.
 */
interface MenuItemInterface {
  name: string,
  parent: void|number,
  id: number,
}
interface detailItemInterface {
  id: number,
  children: detailItemInterface[]
}

interface MenuListInterface {
  items: MenuItemInterface[],
  detail: detailItemInterface[]
}


