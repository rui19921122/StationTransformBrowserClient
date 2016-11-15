export class url_function {
    constructor(url) {
        this.url = url;
        this.url = url;
        this.params = [];
    }
    toString() {
        let _search = '';
        let _url = '';
        if (this.params.length >= 1) {
            _url = this.url + '?';
            for (let i of this.params) {
                _search += `${i[0]}=${i[1]}&`;
            }
        }
        else {
            _url = this.url;
        }
        return _url + _search;
    }
    addParams(title, content) {
        for (let i of this.params) {
            if (i[0] == title) {
                i[1] = content;
                return;
            }
        }
        this.params.push([title, content]);
        return;
    }
}
//# sourceMappingURL=url.js.map