exports.userView = {
    name:                   'user',
    description:            'Return info user from MongoDB',
    outputExample:          {},

    run: function(api, data, next){

        //api.models.User.findOne({ email: "eduardo.gch@gmail.com" }).then(function(user){
        //    if(!user) return next(new Error('user not found'));
        //    data.response.email = user.profile.email;
        //    next();
        //}).catch(next);
        ////
        //api.models.User.findOne({ twitter: "65768738" }).then(function(user){
        //    if(!user) return next(new Error('user not found'));
        //    data.response.twitter = user.profile.name;
        //    next();
        //}).catch(next);

        api.models.User.findById("55e861c3c3ba390c0cb1438f").then(function(user){
            if(!user) return next(new Error('user not found'));
            data.response.user = user;
            next();
        }).catch(next);

        //api.models.Book.findById("56301824138cd73058d42382").then(function(book){
        //    if(!book) return next(new Error('book not found'));
        //    data.response.book = book.year;
        //    next();
        //}).catch(next);

    }
};