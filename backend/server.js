const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pasteRoutes = require("./routes/pasteRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PasteBin API is running 🚀");
});

// API routes
app.use("/pastes", pasteRoutes);

const PORT = process.env.PORT || 5000;

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});