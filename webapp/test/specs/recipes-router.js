describe('RecipesRouter', function() {
    var recipesRouter, eventEmitter, pageLocation;
    beforeEach(function() {
        eventEmitter = (function() {
            var listeners = {};
            return {
                dispatchEvent: function(event) {
                    listeners[event.type]();
                },
                addEventListener: function(eventName, listener) {
                    listeners[eventName] = listener;
                }
            };
        })();
        pageLocation = { pathname: '/turron-dona-pepa' };
        recipesRouter = new RecipesRouter(eventEmitter, pageLocation);
    });
    
    describe('#onSelected(handler)', function() {
        beforeEach(function() {
            
        });
        
        it('should call the registered handler when a recipe is selected select ', function(done) {
            recipesRouter.onSelected(function() {
                done();
            });
            recipesRouter.select();
        });
        
        it('should send the label to the handler', function(done) {
            recipesRouter.onSelected(function(label) {
                label.should.match(/arroz-chaufa/);
                done();
            });
            recipesRouter.select('arroz-chaufa');
        });
        
        it('should call the registered handler when the popstate event is dispatched', function(done) {
            recipesRouter.onSelected(function(label) {
                label.should.match(/turron-dona-pepa/);
                done();
            });
            eventEmitter.dispatchEvent({type: 'popstate'});
        });
    });
});