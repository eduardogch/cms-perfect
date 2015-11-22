exports.userView = {
    name:                   'user:view',
    description:            'Return info user from MongoDB',
    outputExample:          {},

    run: function(api, data, next){
        api.models.User.findById("564ba3e6fc5883fb6a99a1c4", function(err, user) {
            if (err) return next(err);
            data.response.user = user;
            next();
        });
    }
};