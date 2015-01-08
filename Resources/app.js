
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

if (Ti.Network.online) {

}

var window = Ti.UI.createWindow({
    backgroundColor : 'Yellow'
});



var self, defaultWindow = false;
if (Ti.Platform.osname === 'iphone') {
    self = Ti.UI.iOS.createNavigationWindow({
        window : window
    });
} else if (Ti.Platform.osname === 'ipad') {
    
    detailWindow = Ti.UI.createWindow({
        backgroundColor : 'Green'
    });
    
    self = Ti.UI.iPad.createSplitWindow({
        detailView : detailWindow,
        masterView : window
    });
    
} else if (Ti.Platform.osname === 'android') {
    self = window;
} else {
    
    self = Ti.UI.MobileWeb.createNavigationGroup({ 
        window : window 
    });
     
}


self.open();
 

