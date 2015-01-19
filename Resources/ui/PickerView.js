function PickerView() {
    var self = Ti.UI.createWindow({});
    
    // create the picker
    var picker = Ti.UI.createPicker({ }); 
    self.add(picker);
    
    // create fruit column
    var fruitColumn = Ti.UI.createPickerColumn();
    fruitColumn.addRow(Ti.UI.createPickerRow({
        title:'Bananas',
        _value : 'Yellow',
    }));
    fruitColumn.addRow(Ti.UI.createPickerRow({
        title:'Strawberries',
        _value : 'Red'
    }));
    fruitColumn.addRow(Ti.UI.createPickerRow({
        title:'Oranges',
        _value : 'Orange'
    }));
    fruitColumn.addRow(Ti.UI.createPickerRow({
        title:'Grapes',
        _value : 'Purple'
    }));
    
    // create color column
    var colorColumn = Ti.UI.createPickerColumn();
    colorColumn.addRow(Ti.UI.createPickerRow({
        backgroundColor : 'Yellow',
        width : 25,
        height : 25 
    }));
    colorColumn.addRow(Ti.UI.createPickerRow({
        backgroundColor : 'Red',
        width : 25,
        height : 25 
    }));
    colorColumn.addRow(Ti.UI.createPickerRow({
        backgroundColor : 'Orange',
        width : 25,
        height : 25 
    }));
    colorColumn.addRow(Ti.UI.createPickerRow({
        backgroundColor : 'Purple',
        width : 25,
        height : 25 
    }));

    var columns = [fruitColumn,colorColumn];

    picker.add(columns);
    picker.selectionIndicator = true;
    
    var selectedColor = null,
    selectedFruit = null;
    picker.addEventListener('change', function(e) {
        var columnIndex = e.columnIndex;
        var row = e.row;
        
        if (columnIndex === 0) {
            selectedFruit = row;   
        } else {
            selectedColor = row;    
        } 
        
        if (selectedFruit && selectedColor) {
            if (selectedFruit._value === selectedColor.getBackgroundColor()) {
                alert('Match');    
            }    
        }
 
    });
   
    return self;
}

module.exports = PickerView;