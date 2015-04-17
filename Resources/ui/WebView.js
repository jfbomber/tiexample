function WebView() {
    var self = Ti.UI.createWindow({});
    
    var imageView = Ti.UI.createImageView({
       image : '/images/button-alert.png'
    });
    
    // convert image to base64 string
    var imageAs64String = Ti.Utils.base64encode(imageView.toBlob());
    var html = '<div>'+
                    '<h1>Header</h1>'+
                    '<img src="data:image/png;base64,'+imageAs64String+'" />'+
                    '<div>This is my webview</div>'+
                    '<div><a href="http://www.udemy.com">Udemy</a></div>'+
               '</div>';
    var webview = Ti.UI.createWebView({
        html : html
    });
    
    webview.addEventListener('beforeload', function(e) {
        
    });
    
    self.add(webview);
    
    return self;
}

module.exports = WebView;