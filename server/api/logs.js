const { Router } = require("express");
const router = Router();
const LogEntry = require("../models/LogEntry");

// get log entries
router.get("/", async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

// post new log entry
router.post("/", async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    let newRating = req.body.rating;
    console.log(newRating);
    const entry = await LogEntry.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          rating: newRating,
        },
      }
    );

    res.json(entry);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
