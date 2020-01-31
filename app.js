require("dotenv").config();
let express = require("express");
let app = express();

let user = require("./controllers/usercontroller");
let concerts = require("./controllers/concertcontroller");
let sequelize = require("./db");

sequelize.sync();
app.use(express.json());
app.use(require("./middleware/headers"));

app.use("/auth", user);

// app.use(require("./middleware/validateSession"));
app.use("/concerts", concerts);

app.listen(3000, function() {
  console.log(
    "I've been to the year 3000. Not much has changed but they live underwater."
  );
});
