function TwoViews() {
    var self = Ti.UI.createWindow({});
    
    var view1 = Ti.UI.createView({
       backgroundColor : 'Red',
       height : '100dp',
       width : '100dp'
    });
    
    
    var view2 = Ti.UI.createView({
       backgroundColor : 'Green',
       height : '100dp',
       width : '100dp',
       left : 100
    });
    
    self.add(view1);
    self.add(view2);
    
    return self;
    
    
}
module.exports = TwoViews;