"use strict";
var url_function = (function () {
    function url_function(url) {
        this.url = url;
        this.url = url;
        this.params = [];
    }
    url_function.prototype.toString = function () {
        var _search = '';
        var _url = '';
        if (this.params.length >= 1) {
            _url = this.url + '?';
            for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                var i = _a[_i];
                _search += i[0] + "=" + i[1] + "&";
            }
        }
        else {
            _url = this.url;
        }
        return _url + _search;
    };
    url_function.prototype.addParams = function (title, content) {
        for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i[0] == title) {
                i[1] = content;
                return;
            }
        }
        this.params.push([title, content]);
        return;
    };
    return url_function;
}());
exports.url_function = url_function;
//# sourceMappingURL=url.js.map