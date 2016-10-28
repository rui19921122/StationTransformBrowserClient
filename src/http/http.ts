/**
 * Created by Administrator on 2016/10/23.
 */
import {message} from 'antd'

const fetch_api = (url: string,
                   method: 'post'|'get'|'put'|'delete',
                   handle_exception: boolean = false,
                   params?: Object,
                   data?: any,
                   is_fetching?: boolean) => {
  is_fetching = true;
  return new Promise((resolve, reject)=> {
    fetch(url, {
      method: method,
      credentials: 'include',
      body: data
    }).then(res=> {
      is_fetching = false;
      if (handle_exception) {
      } else {
        if (res.status <= 300) {
          res.json().then(json=>resolve(json))
        } else {
          res.json().then(json=>message.error(`请求失败，错误代码为${res.status}，原因为${JSON.stringify(json)}`)).catch(text=>message.error(text.toString()));
        }
      }
    }).catch(err=>message.error("发生错误" + err))
  });
};

export default fetch_api;
