
function FormView() {
    
    
    var doneLabel = Ti.UI.createLabel({
        text : 'Done',
        color : '#0076ff' 
    });
    
    
    var self = Ti.UI.createWindow({
        rightNavButton : doneLabel
    });
    
    /**
     * 
     * @param {Object} title
     * @param {Array<Key,Title>} fields
     */
    var data = [], inputFields = [];
    
    function createMultiFieldRow(title, fields) {
        var rowHeight = 40;
        
        var row = Ti.UI.createTableViewRow({
            height : String(rowHeight * fields.length)+"dp",
            selectionStyle : 'none'
        });
        
        
        // Left side contains the title label and maybe validation information
        var leftSide = Ti.UI.createView({
            width : '30%',
            left : 0
        }); row.add(leftSide);
        
        leftSide.add(Ti.UI.createLabel({
            top : '15dp',
            text : title,
            font : { fontSize : '14dp' },
            left : '10dp',
            textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT 
        }));
        
        // This is the side the input will be in 
        var rightSide = Ti.UI.createView({
            right : 0,
            width : '70%'
        }); row.add(rightSide);
        
        
        var top = 15;
        for (var a=0;a<fields.length;a++) {
        
            var field = fields[a]; 
            var container = Ti.UI.createView({
                height : rowHeight - 10,
                top : top.toString()+"dp",
            }); 
        
            // If the field is an array then we are going to put two fields in one line
            if (Array.isArray(field)) {
                
                field[0].required = (field[0].required === undefined ? false : field[0].required);
                field[1].required = (field[1].required === undefined ? false : field[1].required);
                
                var leftTextField = Ti.UI.createTextField({
                    font : { fontSize : '14dp' },
                    key : field[0].key,
                    hintText : field[0].title,
                    maxLength : field[0].limit,
                    left :10,
                    _obj : field[0],
                    width : '40%'
                }); container.add(leftTextField);
                
                // add the border to the right side of the view
                leftTextField.add(Ti.UI.createView({
                    right : 0,
                    width : 1,
                    backgroundColor : '#d6d6d6' 
                }));
                
                var rightTextField = Ti.UI.createTextField({
                    font : { fontSize : '14dp' },
                    key : field[1].key,
                    hintText : field[1].title,
                    maxLength : field[1].limit,
                    right : 0,
                    _obj : field[1],
                    width : '50%'
                }); container.add(rightTextField);
                
                inputFields.push(leftTextField);
                inputFields.push(rightTextField);
                   
            } else {
                if (field.required === undefined) {
                    field.required = false;   
                }
                var textField = null;
                if (field.title === "Notes") {
                    textField = Ti.UI.createTextArea({
                        height : '100dp',
                        borderColor : '#d6d6d6',
                        borderWidth : '1dp',
                        borderRadius : '3dp',
                        left : 5,
                        hintText : field.title,
                        width : '90%',
                        _obj : field,
                        maxLength : field.limit,
                    });
                    top += 100;
                    container.setHeight(String(parseInt(container.getHeight())+100)+'dp');
                } else {
                    textField = Ti.UI.createTextField({
                        font : { fontSize : '14dp' },
                        left : 10
                        
                    });
                }
                
                textField._obj = field;
                textField.hintText = field.title;
                textField.maxLength = field.limit;
                textField.setWidth("85%");
                
                container.add(textField);
                inputFields.push(textField);
            }

            container.add(Ti.UI.createView({
                bottom : 0,
                height : 1,
                backgroundColor : '#d6d6d6'
            }));
            
            rightSide.add(container);
            top += rowHeight;
        }

        top -= 10;
        row.setHeight(top.toString()+'dp');
        
        data.push(row);
        
    }
    
    var first = { title : 'First Name', key : 'first', limit : 30, required : true };
    var last = { title : 'Last Name', key : 'last', limit : 30, required : true };
    var address = { title : 'Address', key : 'address1', limit : 45 };
    var state = { title : 'State', key : 'state', limit : 2 };
    var city = { title : 'City', key : 'city', limit :  30 };
    var zip = { title : 'Zip', key : 'zip', limit : 10 };
    var email = { title : 'Email', key : 'email', limit : 65, validation : null };
    
    var primaryPhone = { title : 'Primary', key : 'phone1', limit : 25, };
    var otherPhone = { title : 'Other', key : 'phone2', limit : 25, };
    var mobilePhone = { title : 'Mobile', key : 'phone3', limit : 25, };
    var faxPhone = { title : 'Fax', key : 'phone4', limit : 25, };
    
    var url = { title : 'URL', key : 'url', limit : 100 };
    var notes = { title : 'Notes', key : 'notes', limit : 255 }; 
    
    
    createMultiFieldRow('Name', [first, last]);
    createMultiFieldRow("Address", [address, city, [state, zip]]);
    createMultiFieldRow("Email", [email]);
    createMultiFieldRow("Phone", [primaryPhone, mobilePhone, otherPhone, faxPhone]);
    createMultiFieldRow("Notes", [notes]);

    doneLabel.addEventListener('click', function(e) {
        var obj = {};
        for (var i = 0; i < inputFields.length; i++) {
            var inputField = inputFields[i];
            var inputValue = inputField.getValue();
            var inputObj = inputField._obj;
            
            
            obj[inputObj.key] = inputValue;            
            
            
            
            
            if (inputValue.length === 0 && inputObj.required) {
                // alert(inputObj.title + " is required");   
            }
            
           
        }
        
        console.log(obj);
        
    });
    
    
    var tableView  = Ti.UI.createTableView({
        separatorColor : 'White',
        data : data
    });
    
    self.add(tableView);
    
    
    return self;
}

module.exports = FormView;