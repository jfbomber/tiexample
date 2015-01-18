function ListView() {
    var self = Ti.UI.createWindow({});
    
    
    // list views are designed to preform better than table views
    // but do not allow you to add subviews to a list item
    var listView = Ti.UI.createListView();
    // sections are required for lists views vs table views
    var sections = [];
    
    var breakfastSection = Ti.UI.createListSection({ 
        headerTitle: 'breakfasts'
    });
    var breakfastDataSet = [
        { properties: { title: 'pancakes' }},
        { properties: { title: 'french toast'}},
        { properties: { title: 'waffles'}},
    ];
    breakfastSection.setItems(breakfastDataSet);
    sections.push(breakfastSection);
    
    
    var lunchSection = Ti.UI.createListSection({ 
        headerTitle: 'lunch'
    });
    var lunchDataSet = [
        {properties: { title: 'grilled cheese'}},
        {properties: { title: 'peanut butter & honey'}},
        {properties: { title: 'soup'}},
    ];
    lunchSection.setItems(lunchDataSet);
    sections.push(lunchSection);
    
    listView.setSections(sections);
    self.add(listView);
    
    var dinnerSection = Ti.UI.createListSection({ 
        headerTitle: 'dinner'
    });
    var dinnerDataSet = [
        {properties: { title: 'Hamburger'}},
        {properties: { title: 'Pizza'}},
        {properties: { title: 'pasta'}},
    ];
    dinnerSection.setItems(dinnerDataSet);
    listView.appendSection(dinnerSection);
    return self;
}

module.exports = ListView;