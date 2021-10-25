const http = require('http'); //サーバに関するモジュール

const server = http.createServer((req, res) => {
    //req = リクエスト res = レスポンス
    //webブラウザからアクセスが来たタイミングで実行される
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' }); //リクエストに対して返す値のヘッダー情報を定義する
    res.write('<h1>Hello World</h1>'); //webブラウザのページ上に表示する値
    res.end();
});

const port = 8080;
server.listen(port); //サーバを待機状態にする
console.log('Server Listen on port ' + port);