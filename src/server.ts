import express, { Request, Response } from "express";
import { userRoutes } from "./app/user/routes";
import mongoose from "mongoose";
const app = express();

const url = "mongodb://minion:12345minion@ds157964.mlab.com:57964/todominion";

app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use("/user", userRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Not Found !!"
  });
});

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    app.listen(PORT, () => {
      console.log("server running on port " + PORT);
    });
  }
);
