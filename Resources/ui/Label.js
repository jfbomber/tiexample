function Label() {
    var self = Ti.UI.createWindow({
        title : 'Labels',
        backgroundColor : 'White'
    });    
    
    
    var leftLabel = Ti.UI.createLabel({
        text : 'left label',
        left : 10,
        textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
        color : 'Black'
    }); self.add(leftLabel);
    
    
    var offsetLabel = Ti.UI.createLabel({
       text : 'offset',
       shadowColor : 'lightgray',
       backgroundColor : 'Yellow',
       textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
       font : { fontSize:50 },
       shadowRadius : 5,
       shadowOffset : { x:2,y:2 } 
    }); self.add(offsetLabel);
    
    
    var rightLabel = Ti.UI.createLabel({
        text : 'right label',
        right : 10,
        textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
        color : 'Black',
        font : { fontWeight:'bold',fontSize:10,fontStyle:'italic' }
    }); self.add(rightLabel);
    

    
    return self;
}

module.exports = Label;