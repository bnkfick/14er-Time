const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/api/users/unauthorized",
  failureFlash: true
}), function (req, res, next) {
  console.log("sign in successful")
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.post("/signup", function (req, res, next) {
  db.User.findOne({ username: req.body.username }, function (err, user) {
    if (err) throw err;
    if (user) {
      console.log("user already exists")
      return res.json("user already exists");
    }
    if (!user) {
      db.User.findOne({ email: req.body.email }, function (err, useremail) {
        if (err) throw err;
        if (useremail) {
          return res.json("email is already in use")
        }
        if (!useremail) {
          let newUser = new db.User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          })
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save(function (err) {
            if (err) throw err;
            console.log("user saved!");
            res.redirect(307, "/api/users/login")
          });
        }
      })
    }
  })
});

router.get("/unauthorized", function (req, res, next) {
  res.json({
    error: req.flash("error"),
    message: "user not authenticated"
  });
});

router.get("/profile", authMiddleware.isLoggedIn, function (req, res, next) {
  console.log("router get profile");
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.get("/logout", authMiddleware.logoutUser, function (req, res, next) {
  res.json("User logged out successfully");
});

router.get("/admin", authMiddleware.isAdmin, function (req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.get("/preferences", authMiddleware.isLoggedIn, function (req, res, next) {
  console.log("router get preferences=> " + req.user);
  db.UserPreference.findOne({
    where: {
      UserId: req.user._id
    }
  }).then(function (data) {
    res.json(data);
  });

});

router.post("/preferences/:userid", function (req, res) {
  var newUserPref = req.body;
  //does the user already have preferences saved
  db.UserPreference.findOne({
    where: {
      UserId: req.params.userid
    }
  }).then(function (data) {
    if (data) {


      //console.log(newUserPref);
      db.UserPreference.update({
        windLimit: req.body.windLimit,
        precipLimit: newUserPref.precipLimit,
        tempMin: newUserPref.tempMin,
        distMax: newUserPref.distMax
      }, {
          where: {
            UserId: req.params.userid
          }
        })
        .then(function (result) {
          if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            //console.log(`Updated User Preferences:  ${data}`);
            res.json(result);
          }
        });
      //if the user has preferences saved then do an update
    } else {
      //else do a create

      db.UserPreference.create(
        {
          UserId: req.params.userid,
          windLimit: newUserPref.windLimit,
          precipLimit: newUserPref.precipLimit,
          tempMin: newUserPref.tempMin,
          distMax: newUserPref.distMax
        }
      ).then(function (data) {
        //console.log(`New User Preferences created:  ${data}`);
      });
    }

  });

});


module.exports = router;
