import axios from "axios";

export default {
  // logs in user
  login: function (loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  signup: function (signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  isLoggedIn: function () {
    console.log("API.isLoggedIn");
    return axios.get("/api/users/profile");
  },

  logout: function () {
    return axios.get("/api/users/logout");
  },

  getUserPreferences: function (userId) {
    console.log("API.getUserPreferences");
    console.log(userId);
    return axios.get("/api/users/preferences");
  },
  saveUserPreferences: function (userPreferences, userId) {
    console.log("API.saveUserPreferences ");
    console.log(userPreferences);
    console.log(userId);
    return axios.post('/api/users/preferences', {
      userPreferences, userId
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  getMtns: function () {
    return axios.get("/api/mountains/");
  },
  //move to the server side if protected api key is used
  getWeather: function (weatherLink) {
    return axios.get(weatherLink);
  }

};