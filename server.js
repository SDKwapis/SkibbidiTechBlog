//import everything needed for the project to run in the server file
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const path = require("path");
const routes = require("./controllers");

//set up express and point it towards the port # to run on
const app = express();
const PORT = process.env.PORT || 3001;

// setup handlebars with helpers for front end
const hbs = exphbs.create({ helpers });

app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started @ ${PORT}`);
  });
});
