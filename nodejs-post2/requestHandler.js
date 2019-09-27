function doHome(res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
}

function doAndroid(res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<h1>Android</h1>');
    res.end('<p>Hello World</p>');
}

function doOther(res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<h1>Unkown Path</h1>')
    res.end('<p>Hello World</p>');
}

exports.home = doHome;
exports.android = doAndroid;
exports.other = doOther;