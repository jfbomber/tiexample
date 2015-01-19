function Switch() {
    var self = Ti.UI.createWindow({});
    
    var view = Ti.UI.createView({
        left : '35%',
        top : '35%',
        layout : 'horizontal'
    });
    
    var titleLabel = Ti.UI.createLabel({
        text : 'On/Off'
    });
    
    // you can't use the keyword switch because it
    // is reserved in JavaScript
    var onOffSwitch = Ti.UI.createSwitch({
        left : '10dp', // left from the titleLabel
        value : true, // can be true or false
        title : 'On off', // android only and with checkbox
        style : (Ti.Platform.osname === 'android' ? 
                    Titanium.UI.Android.SWITCH_STYLE_CHECKBOX : undefined) // android only
    });
    
    onOffSwitch.addEventListener('change', function(e) {
         alert(e.value);
    });
    
    
    if (Ti.Platform.osname === 'ipad' || Ti.Platform.osname === 'iphone') {
        view.add(titleLabel);    
    }
    
    view.add(onOffSwitch);
    
    self.add(view);
    
    return self;
}

module.exports = Switch;