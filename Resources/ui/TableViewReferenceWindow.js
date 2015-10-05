
/**
 * 
 * This is a window that holds a click
 * 
 * @param {Function} clickEvent
 */
function TableViewReferenceWindow(clickEvent) {
    var self = Ti.UI.createWindow({
    });
    
    var button = Ti.UI.createButton({
        title : 'Increment' 
    });
    
    button.addEventListener('click', clickEvent);
    self.add(button);
    return self;
} 
 
module.exports = TableViewReferenceWindow;

/**
 * 
var numb = 0;
var row = Ti.UI.createTableViewRow({
    height : '45dp',
});

var label = Ti.UI.createLabel({
    text : numb.toString()
}); row.add(label);


rows = [row];
row.addEventListener('click', function(e) {
    var TableViewReferenceWindow = require('ui/TableViewReferenceWindow');
    var tableViewReferenceWindow = new TableViewReferenceWindow(function(e) {
        numb++;
        label.setText(numb.toString()); 
    });

    self.openWindow(tableViewReferenceWindow, { animated:true }); 
});


 */