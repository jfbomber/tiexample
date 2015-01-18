function Button() {
    var self = Ti.UI.createWindow({
        
    });
    
    var button = Ti.UI.createButton({
        title : 'Bordered Button',
        borderColor : 'Red',
        borderRadius : '5dp',
        paddingLeft : '10dp' ,
        width : 125
    }); self.add(button);
    
    return self;
}

module.exports = Button;