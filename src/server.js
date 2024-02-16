const express = require("express");

const app = express();

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  console.log("/books:", request.path);
  response.send({ message: "success", fakeArr: fakeArr });
});

app.post("/books", (request, response) => {
  fakeArr.push(request.body);
  console.log(fakeArr);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
