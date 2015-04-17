function ScrollView() {
    var self = Ti.UI.createWindow({});
    
    var scrollView = Ti.UI.createScrollView({});
    
    var map = Ti.UI.createImageView({
        image : '/images/yosemite-map.png'
    }); scrollView.add(map);
    
    self.add(scrollView);
    
    return self;
}

module.exports = ScrollView;