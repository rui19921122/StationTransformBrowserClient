/**
 * Created by Administrator on 2016/10/23.
 */
export interface ArticleDetailInterface {
  id: number,
  name: string,
  create_person: string,
  create_time: string,
  files: {id: number,name: string,file: string,create_time: string,create_person: number}[],
  content:string,
  menu: string,
  url: string
}
