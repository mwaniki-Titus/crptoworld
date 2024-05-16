import { poolRequest, sql } from "../utils/dbConnect.js";
import logger from "../utils/logger.js";

export const createGrantService = async (grant) => {
  try {
    const { GrantorID, GranteeID, Privilege } = grant;
    const newGrant = await poolRequest()
      .input("GrantorID", sql.Int, GrantorID)
      .input("GranteeID", sql.Int, GranteeID)
      .input("Privilege", sql.VarChar(50), Privilege)
      .query(
        "INSERT INTO grants(GrantorID, GranteeID, Privilege) VALUES(@GrantorID, @GranteeID, @Privilege)"
      );
    logger.info("New grant created successfully:", newGrant);
    return newGrant;
  } catch (error) {
    logger.error("Error while creating grant:", error);
    throw error;
  }
};

export const getAllGrantsService = async () => {
  try {
    const allGrants = await poolRequest().query(`SELECT * FROM grants`);
    logger.info("All grants retrieved successfully:", allGrants);
    return allGrants;
  } catch (error) {
    logger.error("Error while retrieving all grants:", error);
    throw error;
  }
};
