var RecipesRouter = function(eventEmitter, location) {
    var selectHandler,
        popstateEmitter = eventEmitter,
        me = this,
        pageLocation = location;
        
    popstateEmitter.addEventListener('popstate', function() {
        me.select(pageLocation.pathname.split('/').pop());
    }, false);
    
    this.select = function(label) {
        selectHandler(label);
    };
    
    this.onSelected = function(handler) {
        selectHandler = handler;
    };
};