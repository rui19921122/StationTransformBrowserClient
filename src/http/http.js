"use strict";
/**
 * Created by Administrator on 2016/10/23.
 */
var antd_1 = require('antd');
// import {polyfill} from 'es6-promise';
// polyfill();
require('isomorphic-fetch');
var fetch_api = function (url, method, handle_exception, params, data, is_fetching, is_json) {
    if (handle_exception === void 0) { handle_exception = false; }
    is_fetching = true;
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: method,
            credentials: 'include',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (res) {
            is_fetching = false;
            if (handle_exception) {
                resolve(res);
            }
            else {
                if (res.status <= 300) {
                    res.json().then(function (json) { return resolve(json); }).catch(function (e) { return resolve(res.body); });
                }
                else {
                    res.json().then(function (json) { return antd_1.message.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u9519\u8BEF\u4EE3\u7801\u4E3A" + res.status + "\uFF0C\u539F\u56E0\u4E3A" + JSON.stringify(json)); }).catch(function (text) { return antd_1.message.error(text.toString()); });
                }
            }
        }).catch(function (err) {
            antd_1.message.error("发生错误" + err);
            reject(err);
        });
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fetch_api;
//# sourceMappingURL=http.js.map