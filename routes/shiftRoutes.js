const express = require("express");
const Shift = require("../models/Shift");
const router = express.Router();

// Tạo ca trực mới
router.post("/", async (req, res) => {
  try {
    const newShift = new Shift(req.body);
    await newShift.save();
    res.status(201).json(newShift);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lấy tất cả ca trực
router.get("/", async (req, res) => {
  try {
    const shifts = await Shift.find();
    res.json(shifts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy ca trực theo ID
router.get("/:id", async (req, res) => {
  try {
    const shift = await Shift.findById(req.params.id);
    if (!shift) return res.status(404).json({ error: "Not found" });
    res.json(shift);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật ca trực
router.put("/:id", async (req, res) => {
  try {
    const updated = await Shift.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Xoá ca trực
router.delete("/:id", async (req, res) => {
  try {
    await Shift.findByIdAndDelete(req.params.id);
    res.json({ message: "Shift deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
