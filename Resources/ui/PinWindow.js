

function PinWindow() {
    var self = Ti.UI.createWindow({});
    
    var PinView = require('ui/Controls/PinView');
    var pinView = new PinView(function(e) {
            // complete event    
            var value = e.value;
        },
        function(e) {
            // cancel event
            Ti.App.addEventListener('closeWindow');
        },
        function(e) {
            // resend event
            alert('Add functionality to resend the confirmation number to the user\'s email'); 
        }
    );  
    self.add(pinView);
    
    return self;
}

module.exports = PinWindow;