function route(pathname, res, handle){
    if(pathname === "/"){
        handle.home(res);
    }else if(pathname === "/android"){
        handle.android(res);
    }else{
        handle.other(res);
    }
}

exports.route = route;