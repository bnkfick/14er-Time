const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');


const Schema = mongoose.Schema;

let userPreferenceSchema = new mongoose.Schema({
      username: {
        type: String
      },
      windLimit: {
        type: String,
        default: "10"
      },
      precipLimit: {
        type: String,
        default: "20"
      },
      tempMin: {
        type: String,
        default: "50"
      },
      distMax: {
        type: String,
        default: "100"
      },
  });

const userSchema = new Schema({
    firstname: {
        type: String,
        unique: false,
        required: true
    },
    lastname: {
        type: String,
        unique: false,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    admin: {
        type: Boolean,
        unique: false,
        required: true,
        default: false
    },
    preferences: [userPreferenceSchema],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.validPassword = function (password, encrypted) {
    return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model("User", userSchema);

module.exports = User;
