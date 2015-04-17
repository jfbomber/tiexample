function Notification() {
    var self = Ti.UI.createView({});
    
    
    
    var notification = Ti.UI.createNotification({
        message : 'This is a notification',
        duration : Ti.UI.NOTIFICATION_DURATION_LONG 
    });
    
    var button = Ti.UI.createButton({
        title : 'Show notification' 
    }); self.add(button);
    
    button.addEventListener('click', function(e) {
        notification.show();    
    });
    
    return self;
        
}

module.exports = Notification;