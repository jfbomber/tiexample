function Alerts() {
    var self = Ti.UI.createWindow({
        title : 'Alerts'
    });
    alert('say hello');
    var alertButton = Ti.UI.createButton({
        title : 'Click Me for Alert',
        borderColor : 'Red',
        top  : '35%'
    });    
    
    alertButton.addEventListener('click', function(e) {
        // if you don't do this you will set off multiple alerts
        e.cancelBubble = true;
        
        alert(this.getTitle()); 
        
    }); self.add(alertButton);
    
     
    /** 
     * 
     * @param {Integer} min
     * @param {Integer} max
     */
    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    
    var alertDialogButton = Ti.UI.createButton({
        title : 'Click Me for Alert Dialog',
        borderColor : 'Red',
        top : '50%'
    }); self.add(alertDialogButton);
    
    
    alertDialogButton.addEventListener('click', function(e) {
        // if you don't do this you will set off multiple alerts
        e.cancelBubble = true;
        
        var alertDialog = Ti.UI.createAlertDialog({
            title : 'Alert Dialog',
            cancel : 1,
            message : 'Do you want to display an alert?',
            buttonNames : ['Yes', 'No', 'Maybe'],
            
        });
        
        alertDialog.addEventListener('click', function(evt) {
            if (evt.index === evt.source.cancel) {
                console.log("Alert cancelled");
                return;   
            }
            if (evt.index === 2) {
                if (getRandomInt(0, 10) % 2 === 0 ? true : false) {
                    alert('Randomly showing an alert');    
                }  
                return; 
            }
            
            alert('Yes show an alert');
        });
        
        alertDialog.show();
        
    });
    
    return self;
}

module.exports = Alerts;