import {sql} from "../config/db.js";

export async function getTransactionById(req,res) {
    try {
      const{userId}=req.params
     const transaction= await sql `
      SELECT * FROM transactions WHERE user_id=${userId} ORDER BY created_at DESC`
      res.status(200).json(transaction);
    } catch (error) {
       console.log("Error getting the transaction", error);
        res.status(500).json({ message: "Internal server error" });
    } 
}
export async function deleteTransactionById(req,res) {
  try {
    const{id}=req.params
    if(isNaN(parseInt(id))){
      res.status(400).json({message:"Invalid Transaction ID"})
    };
    const result=await sql`
    DELETE FROM transactions WHERE id=${id}  RETURNING *`
  if(result==0){
    res.status(404).json({message:"transaction is not found"});
  }
   res.status(200).json({message:"Transaction deleted successfully"});
  } catch (error) {
      console.log("Error deleting the transaction", error);
      res.status(500).json({ message: "Internal server error" });
  }
}

export async function createTransaction(req,res) {
      try {
     const { title, amount, category, user_id } = req.body;
 
     if (!title || !user_id || !category || amount === undefined) {
       return res.status(400).json({ message: "All fields are required" });
     }
 
     const transaction = await sql`
       INSERT INTO transactions(user_id,title,amount,category)
       VALUES (${user_id},${title},${amount},${category})
       RETURNING *
     `;
 
     console.log(transaction);
     res.status(201).json(transaction[0]);
   } catch (error) {
     console.log("Error creating the transaction", error);
     res.status(500).json({ message: "Internal server error" });
   }
 }

 export async function summaryTransaction(req,res) {
async (req, res) => {
    try {
        const { userId } = req.params;

        // This single query calculates balance, income, and expenses together.
        const summaryResult = await sql`
            SELECT 
                COALESCE(SUM(amount), 0) AS balance,
                COALESCE(SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END), 0) AS income,
                COALESCE(SUM(CASE WHEN amount < 0 THEN amount ELSE 0 END), 0) AS expenses
            FROM 
                transactions 
            WHERE 
                user_id = ${userId}
        `;

        // The result is an array with a single summary object.
        const summary = summaryResult[0];

        res.status(200).json({
            balance: summary.balance,
            income: summary.income,
            expenses: summary.expenses,
        });

    } catch (error) {
        console.error("Error getting the transaction summary:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
 }
