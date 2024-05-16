import { createTransactionService, getAllTransactionsService } from "../services/transactionServices.js";
import logger from "../utils/logger.js";

export const createTransactionController = async (req, res) => {
    try {
      const { SenderID, ReceiverID, Amount } = req.body;
      console.log("Request body received:", req.body); // Log received request body
      const newTransaction = { SenderID, ReceiverID, Amount };
      console.log("Transaction data:", newTransaction); // Log transaction data before processing
      const result = await createTransactionService(newTransaction);
      console.log("Transaction created:", result); // Log successful transaction creation
      res.status(201).json({ message: "Transaction created successfully", transaction: result });
    } catch (error) {
      console.error("Error creating transaction:", error); // Log error if transaction creation fails
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

export const getAllTransactionsController = async (req, res) => {
  try {
    const result = await getAllTransactionsService();
    logger.info("All transactions retrieved:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error retrieving all transactions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
