
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#ffffff');

if (!Ti.Network.online) {
    alert('You are not connected to the internet but it really isn\'t needed');
}

// var Window = require('ui/Label');
// var window = new Window();


var window = Ti.UI.createWindow({ 
    title : 'Example App',
    backgroundColor : 'White'
});


/*
Ti.App.addEventListener('resumed', function(e) {
    Ti.App.launchURL = '';
    
    alert(Ti.Platform.ostype);
    return "Test";
    
    if (Titanium.Platform.ostype == 'ios') {
        cmd = Ti.App.getArguments();
    
        if ((typeof(cmd) === 'object') && cmd.hasOwnProperty('url')) {
            var url = cmd.url; // exampe  
        }    
    } else if (Titanium.Platform.ostype == 'android') {
        var url = Titanium.Android.currentActivity.intent.data;
        alert(url);
    }
    
});
*/

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
createUI('Form View','ui/FormView');
createUI('Two Views','ui/TwoView');
createUI('Alerts','ui/Alerts');
createUI('Button','ui/Button');
createUI('ImageView','ui/ImageView');
createUI('Label','ui/Label');
createUI('ListView','ui/ListView');

var isAndroid = false;
if (Ti.Platform.osname === 'android') {
    isAndroid = true;
    createUI('Notification','ui/Notification');
}

createUI('PickerView','ui/PickerView');
createUI('PinWindow','ui/PinWindow');
createUI('ProgressBar','ui/ProgressBar');
createUI('ScrollableView','ui/ScrollableView');
createUI('ScrollView','ui/ScrollView');
createUI('Switch','ui/Switch');
createUI('WebView','ui/WebView');

var tableView = Ti.UI.createTableView({
    top : 0,
    // allowsSelection : true,
    bottom : 0    
});

var rows = [];
for (var i = 0; i < uiElements.length; i++) {
    var uiElement = uiElements[i];
    var row = Ti.UI.createTableViewRow({
         title : uiElement.name,
         tintColor : 'Black',
         color : 'Black',
         selected : 0, 
         _window : uiElement.window
    });  
    rows.push(row);
}

tableView.setData(rows);

tableView.addEventListener('click', function(e) {
    var sourceType = e.source.toString();
    if (sourceType === '[object TiUITableViewRow]') {
        openWindow({
            window : e.source._window 
        });
    } else {
        
    }
});

window.add(tableView);


function openWindow(e) {
    var NewWindow = require(e.window);
    var newWindow = new NewWindow(e.arg);
    if (newWindow.title) {
        newWindow.setTitle(e.window.replace("ui/",""));    
    }
    
    
    // we don't use a navigation group with android
    if (isAndroid) {
        newWindow.open();  
    } else {
        self.openWindow(newWindow, { animated : true });
    }
    history.push(newWindow);
}

function closeWindow(e) {
     var currentWindow = history.pop();
     currentWindow.close();
}





Ti.App.addEventListener('openWindow', openWindow);


Ti.App.addEventListener('closeWindow', closeWindow);


self.open();





 

