/**
 * Created by Administrator on 2016/10/23.
 */
import {message} from "antd";
import "isomorphic-fetch";
const fetch_api = (url: string,
                   method: 'post'|'get'|'put'|'delete',
                   handle_exception: boolean = false,
                   params?: Object,
                   data?: any,
                   is_fetching?: boolean,
                   is_json?: boolean) => {
  is_fetching = true;
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      credentials: 'include',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => {
      is_fetching = false;
      if (handle_exception) {
        resolve(res)
      } else {
        if (res.status <= 300) {
          res.json().then(json => resolve(json)).catch(e => resolve(res.body))
        } else {
          res.json().then(json => {
            message.error(`请求失败，错误代码为${res.status}，原因为${JSON.stringify(json)}`);
            reject(json);
          }).catch(text => {
            message.error(text.toString());
            reject(text);
          });
        }
      }
    }).catch(err => {
      message.error("发生错误" + err);
      reject(err)
    })
  });
};

export default fetch_api;
