const jokesController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes/", jokesController.findAllJokes);
    app.get("/api/jokes/:id", jokesController.findOneJoke);
    app.put("/api/jokes/update/:id", jokesController.updateJoke);
    app.post("/api/jokes/new", jokesController.createJoke);
    app.delete("/api/jokes/delete/:id", jokesController.deleteJoke);
};

