var User = require('./connection');
var db = {
    Create: function (userObject, res) {
        var obj = new User({
            title: userObject.title,
            desc: userObject.desc,
            email: userObject.email,
            city: userObject.city,
            blind: userObject.blind || 'off',
            deaf: userObject.deaf || 'off',
            mute: userObject.mute || 'off',
            physical: userObject.physical || 'off'
        });
        obj.save(err => {
            if (err) {
                res.render('error', {
                    msg: "Not Added"
                });
            } else {
                res.render('success', {
                    msg: "Job Successfully Added!"
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
    },
    ReadAll: function (res) {
        User.find({}, (err, user) => {
            if (err) {
                res.send('error');
            } else if (user[0]) {
                res.send(user);
            } else {
                res.send('none');
            }
        });
    }
};
module.exports = db;
