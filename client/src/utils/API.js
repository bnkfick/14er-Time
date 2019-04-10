import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  isLoggedIn: function() {
    console.log("API.isLoggedIn");
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout");
  },

  getMtns: function() {
    return axios.get("/api/mountains/");
  },

  
};