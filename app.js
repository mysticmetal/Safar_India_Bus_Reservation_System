// require npm modules
const dotenv = require("dotenv");
const express =require("express"); 
const app = express();

dotenv.config({ path: "config.env" }); //only need to write one time at app.js file


// acquire the user define modules
require("./db/conn");



app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const PORT = process.env.PORT || 3000;



//for serving homepage 
app.use(express.static("client/build"));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});  


app.use("/api/booking",require("./routes/booking"));
app.use("/api/admin",require("./routes/admin"));
app.use("/api/payment",require("./routes/Payment"));

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });