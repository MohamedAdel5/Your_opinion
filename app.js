const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.static(__dirname));

app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
