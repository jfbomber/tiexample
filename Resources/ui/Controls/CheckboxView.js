var CHECKED_URL     = '/images/checkbox-checked.png';
var UNCHECKED_URL   = '/images/checkbox-unchecked.png';

/**
 * 
 * 
 * 
 * @param {Object} title
 * @param {Object} isChecked
 * 
 * @event CheckboxView:checked { title :{String}, checked : {boolean} }
 * 
 * var CheckboxView = require('ui/Controls/CheckboxView');
 * var checkbox = new CheckboxView('This is a test', false);
 * checkbox.setTop('20dp');
 * window.add(checkbox);
 * 
 */
module.exports = function CheckboxView(title, isChecked) {
    
    var self = Ti.UI.createView({
        height : '45dp',
        backgroundColor : 'White'
    });
    
    var checkbox = Ti.UI.createImageView({
        image : isChecked ? CHECKED_URL : UNCHECKED_URL,
        height : '25dp',
        width : '25dp',
        left : '10dp',
        _checked : isChecked
    }); self.add(checkbox);
    
    
    var titleLabel = Ti.UI.createLabel({
        text : title,
        left : '35dp',
        font : { 
            fontSize : '10dp'    
        } 
    }); self.add(titleLabel);
    
    var setChecked = function(e) {
          var checked = e.source._checked ? false : true;
          e.source._checked = checked;
          e.source.setImage(checked ? CHECKED_URL : UNCHECKED_URL);
          
          self.fireEvent('CheckboxView:checked', {
                checked : checked,
                title : title
          });
    };

    checkbox.addEventListener('click', setChecked);
    
    return self;
    
    
};