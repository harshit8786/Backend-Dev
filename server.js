import express from "express";
import session from "express-session";
import fs from "fs";

import userRoutes from "./routes/userRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import isAuthenticated from "./middleware/authMiddleware.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false
}));

app.use("/", userRoutes);
app.use("/", employeeRoutes);

app.get("/dashboard", isAuthenticated, (req, res) => {

  let employees = [];

  if (fs.existsSync("employees.json")) {
    const data = fs.readFileSync("employees.json", "utf-8");
    employees = JSON.parse(data);
  }

  res.render("employees", { employees });
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
