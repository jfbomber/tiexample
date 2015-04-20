/**
var PinView = require('ui/Controls/PinView');
var pinView = new PinView(function(e) {
        // complete event    
        var value = e.value;
    },
    function(e) {
        // cancel event  
    },
    function(e) {
        // resend event 
    }
);  
 */

// CAN BE SET FROM <= 6 
var FIELD_COUNT = 5;
function PinView(completeEvent, cancelEvent, resendEvent) {
    
    // shouldn't need to be adjusted
    var VIEW_WIDTH = Ti.Platform.displayCaps.getPlatformWidth();
    var BOTTOM_WIDTH_PCT = 75;
    var BOTTOM_WIDTH = ((VIEW_WIDTH - 7) * (BOTTOM_WIDTH_PCT / 100));
    var BUTTON_WIDTH = (BOTTOM_WIDTH / 3);
    var BUTTON_HEIGHT = 40;
    // this is for the keyboardsize
    var COL_MAX = 3;
    
    var left = 10;
    var textFields = [];
    var colIndex = 0, rowIndex = 0;
    
    var self = Ti.UI.createView({
        backgroundColor : '#4f90d9', 
        width : VIEW_WIDTH.toString()+'dp'
    });

    
     var headerBar = Ti.UI.createView({
        top : 0,
        height : '50dp',
        backgroundColor : 'White'
    }); self.add(headerBar);
    
    var cancelLabel = Ti.UI.createLabel({
        color : '#4f90d9',
        text : 'Cancel',
        left : '15dp'
    }); headerBar.add(cancelLabel);
    
    cancelLabel.addEventListener('click', cancelEvent);
    
    var resendLabel = Ti.UI.createLabel({
        color : '#4f90d9',
        text : 'Resend',
        right : '15dp',
        textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
    }); headerBar.add(resendLabel);
    
    resendLabel.addEventListener('click', resendEvent);
    
    
    // The label that sits in the middle of the screen
    self.add(Ti.UI.createLabel({
        color : 'White', 
        text : 'Enter your confirmation Code',
        font : { fontSize : '20dp' },
        textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
    }));
    
    
    // this is the container for the text fields
    var textFieldContainer = Ti.UI.createView({
        height : '100dp',
        top : '75dp',
        width : String((50 * FIELD_COUNT) + (2 + FIELD_COUNT))+'dp'
    });
    
    
    for (var i=0;i<FIELD_COUNT;i++) {
        var textView = Ti.UI.createTextField({
            backgroundColor : 'White',
            borderColor : '#2365af',
            borderWidth : '1dp',
            borderRadius : '2dp',
            width : '40dp',
            height : '55dp',
            font : { fontSize : '35dp' },
            left : left.toString()+'dp',
            textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
        });
        
        textFields.push(textView);
        left += 50;
        textFieldContainer.add(textView);
    }
    
    var bottomContainer = Ti.UI.createView({
        bottom : 0,
        width : BOTTOM_WIDTH_PCT.toString()+'%'
    }); 
    
    var textFieldIndex = 0;
    for (var i=1; i < 13; i++) {
        var x = colIndex * BUTTON_WIDTH + (colIndex * 1);
        var y = rowIndex * BUTTON_HEIGHT + (rowIndex * 1);
        var text = i.toString();
        if (rowIndex === 3) {
            switch (colIndex) {
                case 0 : text = ""; break;
                case 1 : text = "0"; break;
                case 2 : text = "back"; break;    
            }   
            if (colIndex === 0) {
                text = "";   
            }
        }
        var btnWidth = BUTTON_WIDTH - 2;
        var buttonView = Ti.UI.createLabel({
            top : y,
            left : x,
            text : text.toString(),
            height : BUTTON_HEIGHT.toString()+'dp',
            width : btnWidth.toString()+'dp',
            textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
            backgroundColor : '#2365af',
            color : 'White'
        });
        
        
        // if the button is empty then we don't want to show the click action
        if (text !== '') {
            
            // click event for the button
            buttonView.addEventListener('touchstart', function(e) {
                e.source.setBackgroundColor('#60a9fa');
                var text = this.getText();
                if (text === 'back') {
                    
                    if (textFieldIndex === 0) {
                        return;   
                    }
                    
                    textFieldIndex--;
                    textFields[textFieldIndex].setValue('');
                    return;   
                }
                
                if (text === '' || textFieldIndex == FIELD_COUNT) {
                    return;   
                }
                
                textFields[textFieldIndex].setValue(text);
                textFieldIndex++;
                
                // if the last textfield is 
                if (textFieldIndex > (FIELD_COUNT-1)) {
                    var value = '';
                    for (var i = 0; i < textFields.length; i++) {
                        value += textFields[i].getValue();
                    }
                    
                    completeEvent({
                        value : value 
                    }); 
                }
                
            }); 
           
            // this just resets the background to simulate a click action
            buttonView.addEventListener('touchend', function(e) {
                e.source.setBackgroundColor('#2365af');
            });
        }
        
        
        colIndex++;
        if (colIndex >= COL_MAX) {
            colIndex = 0;
            rowIndex++;   
        }
        
        bottomContainer.add(buttonView);
    }
    
    var y = rowIndex * BUTTON_HEIGHT + (rowIndex * 1);
    
    bottomContainer.setHeight(y.toString()+'dp');
    self.add(bottomContainer);
    self.add(textFieldContainer);
    return self;
}

module.exports = PinView;