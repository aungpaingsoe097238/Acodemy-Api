require("dotenv").config();
const express = require("express"),
  http = require("http"),
  app = express(),
  server = http.createServer(app),
  cors = require("cors"),
  fileupload = require("express-fileupload");

app.use(express.json());
app.use(fileupload());
app.use('/public/uploads', express.static('public/uploads'));

// Routes
const routes = require("./routes");

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json("Aocdemy Api is running");
});

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status).json({ status: false, message: err.message });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
