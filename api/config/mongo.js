exports.default = {
    mongo: function(api){
        return {
            autoStart: true,
            connectionURL: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test',
            debug: true,
            modelPath: api.project_root + '/models'
        };
    }
};