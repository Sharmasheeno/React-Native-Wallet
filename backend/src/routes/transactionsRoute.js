import express from "express";
import {getTransactionById} from "../controllers/transactionsController.js"
import {deleteTransactionById} from "../controllers/transactionsController.js"
import {createTransaction} from "../controllers/transactionsController.js"
import {summaryTransaction} from "../controllers/transactionsController.js"
const router=express.Router();

router.get("/:userId",getTransactionById)
router.delete("/:id",deleteTransactionById);
router.post("/",createTransaction)
router.get("/summary/:userId", summaryTransaction);

export default router;