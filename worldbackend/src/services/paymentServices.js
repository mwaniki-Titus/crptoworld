import { poolRequest, sql } from "../utils/dbConnect.js";
import logger from "../utils/logger.js";
import axios from 'axios';


const PLISIO_API_KEY = '8cYlpCF1MYgAVzAYzdT7o7ebPFhOiN5qpCcbMZpCEYB6b78RTEOliMkNu1NIwswm';
const PLISIO_BASE_URL = 'https://plisio.net/api/v1';

export const createPaymentService = async (payment) => {
  try {
    const { UserID, MerchantID, Amount, Currency, PaymentGateway, PaymentStatus } = payment;
    
    console.log("Payment details received:", payment);

    const requestData = {
      amount: Amount,
      currency: Currency,
      order_number: `ORD-${Date.now()}`,
      callback_url: 'http://localhost:5000/api/callback',
      success_url: 'http://localhost:5000/success',
      cancel_url: 'http://localhost:5000/cancel'
    };

    console.log("Request data to Plisio:", requestData);

    const response = await axios.post(`${PLISIO_BASE_URL}/invoices/new`, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PLISIO_API_KEY}`
      }
    });

    console.log("Response from Plisio:", response.data);

    const newPayment = await poolRequest()
      .input("UserID", sql.Int, UserID)
      .input("MerchantID", sql.Int, MerchantID)
      .input("Amount", sql.Decimal(18, 2), Amount)
      .input("Currency", sql.VarChar(3), Currency)
      .input("PaymentGateway", sql.VarChar(50), PaymentGateway)
      .input("PaymentStatus", sql.VarChar(20), PaymentStatus)
      .input("PaymentURL", sql.VarChar(255), response.data.data.invoice_url)
      .query(
        "INSERT INTO payments(UserID, MerchantID, Amount, Currency, PaymentGateway, PaymentStatus, PaymentURL) VALUES(@UserID, @MerchantID, @Amount, @Currency, @PaymentGateway, @PaymentStatus, @PaymentURL)"
      );

    console.log("Database response:", newPayment);

    logger.info("New payment created successfully:", newPayment);
    return { ...newPayment.recordset[0], paymentUrl: response.data.data.invoice_url };
  } catch (error) {
    console.error("Error while creating payment:", error);
    logger.error("Error while creating payment:", error);
    throw error;
  }
};


export const getAllPaymentsService = async () => {
  try {
    const allPayments = await poolRequest().query(`SELECT * FROM payments`);
    logger.info("All payments retrieved successfully:", allPayments);
    return allPayments.recordset;
  } catch (error) {
    logger.error("Error while retrieving all payments:", error);
    throw error;
  }
};
