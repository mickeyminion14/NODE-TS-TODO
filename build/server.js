"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./app/user/routes");
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
var url = "mongodb://minion:12345minion@ds157964.mlab.com:57964/todominion";
app.use(express_1.default.json());
var PORT = process.env.PORT || 8080;
app.use("/user", routes_1.userRoutes);
app.use(function (req, res) {
    res.status(404).json({
        message: "Not Found !!"
    });
});
mongoose_1.default.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, function () {
    app.listen(PORT, function () {
        console.log("server running on port " + PORT);
    });
});
