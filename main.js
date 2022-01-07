const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { addMessage, getMessage } = require("./user.js");

app.get("/getMessage", async (req, res) => {
  const list = await getMessage();
  res.json(list);
});

app.post("/addMessage", async (req, res) => {
  const obj = req.body;
  console.log(obj);
  await addMessage(obj);
  res.json({ msg: "Message added successfully !!!" });
});

app.listen(5050, () => console.log("server started..."));
