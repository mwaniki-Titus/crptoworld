import { poolRequest, sql } from "../utils/dbConnect.js";
import logger from "../utils/logger.js";
import axios from 'axios';

const PLISIO_API_KEY = 'your_plisio_api_key';
const PLISIO_BASE_URL = 'https://plisio.net/api/v1';

export const createPaymentService = async (payment) => {
  try {
    const { UserID, MerchantID, Amount, Currency, PaymentGateway, PaymentStatus } = payment;


    const response = await axios.post(`${PLISIO_BASE_URL}/invoices/new`, {
      amount: Amount,
      currency: Currency,
      order_number: `ORD-${Date.now()}`,
      callback_url: 'https://yourwebsite.com/api/callback',
      success_url: 'https://yourwebsite.com/success',
      cancel_url: 'https://yourwebsite.com/cancel'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PLISIO_API_KEY}`
      }
    });

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

    logger.info("New payment created successfully:", newPayment);
    return { ...newPayment.recordset[0], paymentUrl: response.data.data.invoice_url };
  } catch (error) {
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
