function WebView() {
    var self = Ti.UI.createWindow({});
    
    var html = '<div>'+
                    '<h1>Header</h1>'+
                    '<div>This is my webview</div>'+
                    '<div><a href="http://www.udemy.com">Udemy</a></div>'+
               '</div>';
               
    var webview = Ti.UI.createWebView({
        html : html
    });
    
    self.add(webview);
    
    return self;
}

module.exports = WebView;