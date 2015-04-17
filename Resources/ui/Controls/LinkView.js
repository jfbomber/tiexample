

var LinkView = function(text, clickEvent, viewOptions) {
    if (!viewOptions) {
        viewOptions = { };   
    }
    viewOptions.height = '45dp';
    var self = Ti.UI.createView(viewOptions);
    
    var textLabel = Ti.UI.createLabel({
        text : text,
        color : 'Blue',
        font : {
            fontSize : '10dp'   
        }
    }); self.add(textLabel);
    
    
    self.addEventListener('click', clickEvent);
    
    
    return self;
};

module.exports = LinkView;