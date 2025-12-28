import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// home route
app.get("/", (req, res) => {
  res.render("home.ejs");
});
//blog route
app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});
//about route
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
//submit route
app.post("/blog", (req, res) => {
  const title = req.body["title"];
  const content = req.body["content"];
  const date = new Date().toLocaleTimeString();
  res.render("blog.ejs", {
    title: title,
    content: content,
    time: date,
  });
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});
// app.get("/submit", (req, res) => {
//   res.render("post.es");
// });

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
