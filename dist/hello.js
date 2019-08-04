"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        // httpサーバーを設定する
        var server = http.createServer(function (request, response) {
            return _this.requestHandler(request, response);
        });
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen('5000');
    }
    /*
    * サーバーにリクエストがあった時に実行される関数
    */
    Main.prototype.requestHandler = function (request, response) {
        response.end('Hello! Node.js with TypeScript');
    };
    return Main;
}());
var main = new Main();
