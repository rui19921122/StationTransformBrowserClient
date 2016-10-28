"use strict";
/**
 * Created by Administrator on 2016/10/23.
 */
const antd_1 = require('antd');
const fetch_api = (url, method, handle_exception = false, params, data, is_fetching) => {
    is_fetching = true;
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: method,
            credentials: 'include',
            body: data
        }).then(res => {
            is_fetching = false;
            if (handle_exception) {
            }
            else {
                if (res.status <= 300) {
                    res.json().then(json => resolve(json));
                }
                else {
                    res.json().then(json => antd_1.message.error(`请求失败，错误代码为${res.status}，原因为${JSON.stringify(json)}`)).catch(text => antd_1.message.error(text.toString()));
                }
            }
        }).catch(err => antd_1.message.error("发生错误" + err));
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fetch_api;
