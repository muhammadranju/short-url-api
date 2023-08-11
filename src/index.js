const dotenv = require("dotenv").config();
const http = require("http");
const app = require("../app/app");
const { connectToMongoDB } = require("../config/dbConnect");
const PORT = process.env.PORT || 8080;
connectToMongoDB(
  process.env.MONGO_URI || "mongodb://localhost:27017/short-url"
).then(console.log("MongoDB connection successfully🚀"));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
