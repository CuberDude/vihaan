var User = require('./connection');
var db = {
    Create: function (userObject, res) {
        var obj = new User({
            email: userObject.email,
            pass: userObject.pass
        });
        obj.save(err => {
            if (err) {
                res.render('error', {
                    msg: "Not Created"
                });
            } else {
                res.render('success', {
                    msg: "Account Creation Successful"
                });
            }
        });
    },
    Read: function (userObject, res) {
        User.find({
            email: userObject.email,
            pass: userObject.pass
        }, (err, user) => {
            if (err) {
                res.render('error');
            } else if (user[0]) {
                res.render('feed');
            } else {
                res.render('pro-error');
            }
        });
    },
    Update: function () {},
    Delete: function (userObject, res) {
        User.findOneAndRemove({
            userid: userObject.userid,
            pass: userObject.pass
        }, function (err) {
            if (err) {
                response.send("Can't delete the user");
            } else {
                response.send("User Information Deleted Succesfully...");
            }
        });
    }
};
module.exports = db;
