// paymentController.js

import { createPaymentService, getAllPaymentsService } from "../services/paymentServices.js";
import logger from "../utils/logger.js";

export const createPaymentController = async (req, res) => {
  try {
    const newPayment = req.body;
    const result = await createPaymentService(newPayment);
    logger.info("Payment created:", result);
    res.status(201).json(result);
  } catch (error) {
    logger.error("Error creating payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllPaymentsController = async (req, res) => {
  try {
    const result = await getAllPaymentsService();
    logger.info("All payments retrieved:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error retrieving all payments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
