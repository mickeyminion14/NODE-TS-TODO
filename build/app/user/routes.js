"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User_ctrl_1 = require("./User.ctrl");
exports.userRoutes = express_1.default();
exports.userRoutes.post("/login", User_ctrl_1.loginCtrl);
exports.userRoutes.post("/signup", User_ctrl_1.signupCtrl);
