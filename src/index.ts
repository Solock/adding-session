import express from "express";
import nunjucks from "nunjucks";
import cookie from "cookie";
//import { comparse } from "./comparse";

function comparse(cookieArray: string[], bddArray: string[]): boolean {
  let flag: boolean = false;
  if () {
    return flag;
  } else {
    return false;
  }
}

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

const formParser = express.urlencoded({ extended: true });

app.post("/info", formParser, (request, response) => {
  const logInfo = request.body.login;
  const userLog = ["Sofiane", "azerty"];
  console.log(logInfo);
  console.log(userLog);
  response.set(
    "Set-Cookie",
    cookie.serialize("myCookie", logInfo, {
      maxAge: 3600, // This is the time (in seconds) that this cookie will be stored
    }),
  );
  //response.render("info");
  console.log(comparse(logInfo, userLog));
  // if (comparse(logInfo, userLog)) {
  //   console.log(comparse(logInfo, userLog));
  //   response.render("/succes");
  // } else {
  //   console.log(comparse(logInfo, userLog));
  //   response.redirect("/info");
  // }
  response.render("info")
});

app.get("/info", (request, response) => {
  response.render("info");
});

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/login", (request, response) => {
  response.render("login");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
