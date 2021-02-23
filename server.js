const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("APP is running on http://localhost:" + PORT);
});
