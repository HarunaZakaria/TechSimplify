import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// home route
app.get("/", (req, res) => {
  res.render("index.ejs");
});
//submit route
app.post("/submit", (req, res) => {
  const title = req.body["title"];
  const content = req.body["content"];
  const date = new Date();
  res.render("post.ejs", {
    title: title,
    content: content,
    time: date,
  });
});

app.get("/submit", (req, res) => {
  res.render("post.es");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
