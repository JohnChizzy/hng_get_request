const express = require("express");
const cors = require("cors");



const app = express();

app.use(cors({
    origin: '*'
}));


app.get("/", function(req, res){
    const slackUsername = "John Amakoh";
    const backend = true;
    const age = 26;
    const bio = "My name is John Amakoh. I am an Arsenal fan";

    res.json({
        slackUsername,
        backend,
        age,
        bio
    })


 
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log(`Server started on ${port} Successfully`);
});