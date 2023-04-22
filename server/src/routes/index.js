import express from "express";
import userRouter from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/person", personRoute);
router.use("/reviews", reviewRoute);
router.use("/mediaType", mediaRoute);

export default router;