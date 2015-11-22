var secrets = require('../../../config/secrets');

exports.default = {
    mongo: function(api){
        return {
            enable: true,
            startMongo: false,
            connectionURL: secrets.mongoDB,
            debug: true,
            modelPath: api.projectRoot + '/models'
        };
    }
};