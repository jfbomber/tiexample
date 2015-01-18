function ImageView() {
    var self = Ti.UI.createWindow({});
   
    var imageView = Ti.UI.createImageView({
        image : '/images/yosemite-map.png'
    });   self.add(imageView);
   
    return self;
}

module.exports = ImageView;