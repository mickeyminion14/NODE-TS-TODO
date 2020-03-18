"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var joi_1 = __importDefault(require("@hapi/joi"));
var UserModel = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
}, {
    collection: "account",
    timestamps: true
});
exports.validateUser = function (payload) {
    var schema = joi_1.default.object({
        name: joi_1.default.string()
            .min(3)
            .max(25)
            .required(),
        age: joi_1.default.number().max(100),
        email: joi_1.default.string().email(),
        password: joi_1.default.string()
            .alphanum()
            .min(8)
            .max(25)
    });
    return schema.validate(payload);
};
exports.User = mongoose_1.default.model("User", UserModel);
