exports.userView = {
    name:                   'user',
    description:            'Return info user from MongoDB',
    outputExample:          {},

    run: function(api, data, next){

        api.models.User.findById("55e861c3c3ba390c0cb1438f", function(err, user) {
            if (err) return next(err);
            data.response.user = user;
            next();
        });

    }
};