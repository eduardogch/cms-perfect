exports.default = {
    mongo: function(api){
        return {
            enable: true,
            startMongo: false,
            connectionURL: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test',
            debug: true,
            modelPath: api.projectRoot + '/models'
        };
    }
};