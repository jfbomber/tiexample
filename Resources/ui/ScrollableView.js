function ScrollableView() {
    var self = Ti.UI.createWindow({});
    

    var views = [],
    viewHeight = 200,
    viewWidth = 200,
    pageCount = 5;
    
    
    for (var i = 0; i < pageCount; i++) {
        var label = Ti.UI.createLabel({ 
            text : String(i+1)
        });
        var view = Ti.UI.createView({});
        view.add(label);
        views.push(view);    
    }
    
    var scrollableView = Ti.UI.createScrollableView({
        backgroundColor : 'Gray',
        showPagingControl : true,
        views : views,
        width : viewWidth,
        height : viewHeight    
    });
    
    self.add(scrollableView);
    
    return self;   
}

module.exports = ScrollableView;