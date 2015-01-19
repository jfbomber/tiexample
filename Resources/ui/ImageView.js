function ImageView() {
    var self = Ti.UI.createWindow({});
    var rotation = 90;
    
    var imageView = Ti.UI.createImageView({
        image : '/images/clock.png'
    });   self.add(imageView);
   
   
   // add a click event to the image view
   imageView.addEventListener('click', function(e) {
        var rotateMatrix = Ti.UI.create2DMatrix({
            rotate : rotation  
        });
        // adjust the rotation for the next click event
        rotation += 90;
        if (rotation > 270) {
            rotation = 0;   
        }
   
        // create an animation that will apply our matrix
        var rotateAnimation = Ti.UI.createAnimation({
            duration : 250,
            transform : rotateMatrix 
        });
        imageView.animate(rotateAnimation);
   });
   
    return self;
}

module.exports = ImageView;