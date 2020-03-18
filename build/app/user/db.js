"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_model_1 = require("./User.model");
exports.saveUser = function (payload) {
    var user = new User_model_1.User(payload);
    var error = User_model_1.validateUser(payload);
    return error ? error : user.save();
};
