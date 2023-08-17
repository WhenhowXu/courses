const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const menuRouter = require("./routes/menus");
const notFoundMiddleware = require("./middleware/not-found");
app.use((req, res, next) => {
  console.log(req.url, "---url");
  next();
});
// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/menu", menuRouter);

app.use(notFoundMiddleware);
const port = 3009;
app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
