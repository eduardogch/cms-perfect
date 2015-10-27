module.exports = {
    loadPriority:  1000,
    startPriority: 1000,
    stopPriority:  1000,
    initialize: function(api, next){
        api.mongo = {};

        console.log("---- Hola Api: " + api.config.mongo.connectionURL);

        next();
    },
    start: function(api, next){
        next();
    },
    stop: function(api, next){
        next();
    }
};