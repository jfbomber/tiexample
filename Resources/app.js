
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#ffffff');







if (Ti.Network.online) {

}

// var Window = require('ui/Label');
// var window = new Window();


var window = Ti.UI.createWindow({
    title : 'Test',
    backgroundColor : 'Yellow'
});



// global variables
var self, history = [], uiElements =[];
// iphone
if (Ti.Platform.osname === 'iphone') {
    self = Ti.UI.iOS.createNavigationWindow({
        window : window
    });
} else if (Ti.Platform.osname === 'ipad') {
    // ipad
    var detailNavigationWindow = Ti.UI.iOS.createNavigationWindow({
        title : 'detailWindow',
        window : Ti.UI.createWindow({ backgroundColor : 'Green' })
    });
    
    var masterNavigationWindow = Ti.UI.iOS.createNavigationWindow({
        title : 'masterWindow',
        window : window
    });
    
    var splitWindow = Ti.UI.iPad.createSplitWindow({
        detailView : detailNavigationWindow,
        masterView : window,
    });
    // simulate the iphone and mobile web navigation group
    self = {
        open : function() {
            splitWindow.open();   
        },
        openWindow : function(window) {
            splitWindow.openWindow(window);            
        }  
    };
} 
else if (Ti.Platform.osname === 'android') {
    // android, also simulate the iphone and mobile web navigation group
    self = {
        open : function() {    
            window.open();   
        },
        openWindow : function(window) {
            window.open();
        }
    };
}  
else {
    // blackberry and mobileweb
    self = Ti.UI.MobileWeb.createNavigationGroup({ 
        window : window 
    }); 
}

/**
 * 
 * @param {String} name, title of the table view row
 * @param {String} window, path to the ui window
 */
var createUI = function(name, window) {
     uiElements.push({
         name : name, 
         window : window
     }); 
};

// add elements
createUI('Alerts','ui/Alerts');
createUI('Button','ui/Button');
createUI('ImageView','ui/ImageView');
createUI('Label','ui/Label');
createUI('ListView','ui/ListView');
createUI('PickerView','ui/PickerView');
createUI('ProgressBar','ui/ProgressBar');
createUI('ScrollableView','ui/ScrollableView');
createUI('ScrollView','ui/ScrollView');
createUI('Switch','ui/Switch');
createUI('WebView','ui/WebView');


 
var tableView = Ti.UI.createTableView({});
var rows = [];
for (var i = 0; i < uiElements.length; i++) {
    var uiElement = uiElements[i];
    var row = Ti.UI.createTableViewRow({
         title : uiElement.name,
         _window : uiElement.window
    });  
    
    row.addEventListener('click', function(e) {
        e.cancelBubble = true;
        openWindow({
           window : this._window 
        });
    });
    rows.push(row);
}

tableView.setData(rows);
window.add(tableView);


function openWindow(e) {
    var NewWindow = require(e.window);
    var newWindow = new NewWindow(e.arg);
    
    newWindow.setTitle(e.window.replace("ui/",""));
    self.openWindow(newWindow, { animated:true });      
    history.push(newWindow);
}

function closeWindow(e) {
     var currentWindow = history.pop();
     currentWindow.close();
}



Ti.App.addEventListener('openWindow', openWindow);


Ti.App.addEventListener('closeWindow', closeWindow);


self.open();
 

