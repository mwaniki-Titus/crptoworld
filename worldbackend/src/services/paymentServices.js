// paymentService.js

import { poolRequest, sql } from "../utils/dbConnect.js";
import logger from "../utils/logger.js";

export const createPaymentService = async (payment) => {
  try {
    const {
      UserID,
      MerchantID,
      Amount,
      Currency,
      PaymentGateway,
      PaymentStatus,
    } = payment;
    const newPayment = await poolRequest()
      .input("UserID", sql.Int, UserID)
      .input("MerchantID", sql.Int, MerchantID)
      .input("Amount", sql.Decimal(18, 2), Amount)
      .input("Currency", sql.VarChar(3), Currency)
      .input("PaymentGateway", sql.VarChar(50), PaymentGateway)
      .input("PaymentStatus", sql.VarChar(20), PaymentStatus)
      .query(
        "INSERT INTO payments(UserID, MerchantID, Amount, Currency, PaymentGateway, PaymentStatus) VALUES(@UserID, @MerchantID, @Amount, @Currency, @PaymentGateway, @PaymentStatus)"
      );
    logger.info("New payment created successfully:", newPayment);
    return newPayment;
  } catch (error) {
    logger.error("Error while creating payment:", error);
    throw error;
  }
};

export const getAllPaymentsService = async () => {
  try {
    const allPayments = await poolRequest().query(`SELECT * FROM payments`);
    logger.info("All payments retrieved successfully:", allPayments);
    return allPayments;
  } catch (error) {
    logger.error("Error while retrieving all payments:", error);
    throw error;
  }
};
