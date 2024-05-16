import { poolRequest, sql } from "../utils/dbConnect.js";
import logger from "../utils/logger.js";

export const createTransactionService = async (transaction) => {
    try {
      const { SenderID, ReceiverID, Amount } = transaction;
      console.log("Transaction data received:", transaction); // Log received transaction data
      const result = await poolRequest()
        .input("SenderID", sql.Int, SenderID)
        .input("ReceiverID", sql.Int, ReceiverID)
        .input("Amount", sql.Decimal(18, 2), Amount)
        .query(
          "INSERT INTO transactions(SenderID, ReceiverID, Amount) VALUES(@SenderID, @ReceiverID, @Amount)"
        );
      console.log("New transaction created successfully:", result); // Log successful transaction creation
      return result;
    } catch (error) {
      console.error("Error while creating transaction:", error); // Log error if transaction creation fails
      throw error;
    }
  };
  

export const getAllTransactionsService = async () => {
  try {
    const allTransactions = await poolRequest().query(`SELECT * FROM transactions`);
    logger.info("All transactions retrieved successfully:", allTransactions);
    return allTransactions;
  } catch (error) {
    logger.error("Error while retrieving all transactions:", error);
    throw error;
  }
};
