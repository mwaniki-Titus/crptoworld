import { createGrantService, getAllGrantsService } from "../services/grantsServices.js";
import logger from "../utils/logger.js";

export const createGrantController = async (req, res) => {
  try {
    const newGrant = req.body;
    const result = await createGrantService(newGrant);
    logger.info("Grant created:", result);
    res.status(201).json(result);
  } catch (error) {
    logger.error("Error creating grant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllGrantsController = async (req, res) => {
  try {
    const result = await getAllGrantsService();
    logger.info("All grants retrieved:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error retrieving all grants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
