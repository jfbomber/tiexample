function ProgressBar() {
    var self = Ti.UI.createWindow({});
    var value = 0;
    
    var barView = Ti.UI.createView({
       width : '100%',
       height : 100,
       layout : 'horizontal',
       top : 100
    });
    
    var progressBar = Titanium.UI.createProgressBar({
        width : '80%',
        height:'auto',
        min:0,
        max:10,
        // start value
        value: value,
        color:'Black',
        message:'Loading 0 of 10',
        font:{fontSize:14, fontWeight:'bold'},
        style: Ti.Platform.name === 'iPhone OS' ? 
            Titanium.UI.iPhone.ProgressBarStyle.PLAIN : undefined,
    });
    
    // min value label
    barView.add(Ti.UI.createLabel({
       text : '0',
       width : '10%'
    }));
    // progress bar
    barView.add(progressBar);
    // max value label
    barView.add(Ti.UI.createLabel({
       text : '10',
       width : '10%',
       textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT
    }));
    // add bar view
    self.add(barView);
    // show the progress bar
    progressBar.show();
    
    /**
     * Function to set the next progress value
     */
    var nextProgress = function() {
        var newValue = value++;
        progressBar.setValue(newValue);
        progressBar.setMessage('Loading '+newValue+' of 10');
        if (value <= progressBar.getMax()) {
            setTimeout(function() { nextProgress(); }, 500);   
        }
    };
    
    // button to start the progress
    var button = Ti.UI.createButton({
        title : 'start',
        bottom : 25
    }); self.add(button);
    
    // click event for the button
    button.addEventListener('click', function(e) {
        nextProgress(); 
    });
        
    return self;
        
}

module.exports = ProgressBar;