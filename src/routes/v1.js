const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controller");

// middleware router
router.use((req, res, next) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res.status(401).json({
      error: "Missing x-api-key"
    });
  }

  next();
});

// crud router
router.get("/todos", todoController.getAll);

router.get("/todos/:id", todoController.getOne);

router.post("/todos", todoController.create);

router.put("/todos/:id", todoController.update);

router.delete("/todos/:id", todoController.remove);

module.exports = router;