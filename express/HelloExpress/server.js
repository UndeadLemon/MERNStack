const express = require("express");
const app = express();

// req is short for request
// res is short for response
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
  res.json( users );
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});
app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json( users[req.params.id])
})
app.post("/api/users", (req, res) => {

  console.log(req.body);
  users.push(req.body);

  res.json( { status: "ok"});
});

app.use(express.json());
app.use (express.urlencoded({ extended: true}));

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
