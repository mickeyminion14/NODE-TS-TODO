"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = {
    minLength: 3,
    type: String,
    maxLength: 25,
    required: true
};
exports.Age = {
    type: Number
};
exports.Email = {
    type: String,
    required: true
};
exports.Password = {
    minLength: 8,
    type: String,
    maxLength: 25,
    required: true
};
