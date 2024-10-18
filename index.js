// index.js
const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // To parse JSON request bodies

// Book Routes
app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
