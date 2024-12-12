import express from "express";

const app = express();

const PORT = 5002;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello World");
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);
    res.status(200).json({ message: "Registered Succesfully! 💻" });
  } catch (error) {
    console.log(error);
  }
});

//req.params

// req.params (Route Parameters)
// used to captire values from the route URL pattern
// Typically used in dynamic routes where parts of the URL are available

//Using PUT api

app.put("/api/user/:id", (req, res) => {
  try {
    let userID = req.params.id;
    console.log(userID);
    res.status(200).json(userID);
  } catch (error) {
    console.log(error);
  }
});

app.get("/link/:website", (req, res) => {
  try {
    let userURL = req.params.website;
    console.log(userURL);
    res.status(200).redirect(`http://${userURL}`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/search", (req, res) => {
  try {
    let query = req.query;
    console.log(query);
    res.status(200).json(query);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
