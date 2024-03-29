"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../controllers/User");
const router = (0, express_1.Router)();
router.post("/", User_1.createUser);
router.get("/:id", User_1.getUser);
//router.patch("/:id", updateUser);
router.delete("/:id", User_1.deleteUser);
exports.default = router;
