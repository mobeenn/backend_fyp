import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";
import {bookReserved, getBook} from "../controller/book.controller.js"
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/book-reserved",bookReserved);

router.get("/get-book",getBook)


export default router;
