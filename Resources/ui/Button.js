function Button() {
    var self = Ti.UI.createWindow({});
    
    var button = Ti.UI.createButton({
        title : 'Bordered Button',
        borderColor : 'Red',
        borderRadius : '5dp',
        width : 125
    }); self.add(button);
    
    var imageButton = Ti.UI.createButton({
       top : 75,
       width : 150,
       height : 56,
       // do not use the image property
       backgroundImage : '/images/button-alert.png'
    }); self.add(imageButton);
    
    imageButton.addEventListener('click', function(e) {
        alert('This button has an alert!'); 
    });
    
    return self; 
}

module.exports = Button;