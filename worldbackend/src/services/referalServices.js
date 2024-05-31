import { poolRequest, sql } from "../utils/dbConnect.js";
import logger from "../utils/logger.js";

export const createReferralService = async (referrerID, referralCode, referredID = null) => {
    try {
      // Fetch the referrer's username
      const referrerCheck = await poolRequest()
        .input("UserID", sql.Int, referrerID)
        .query("SELECT Username FROM tbl_user WHERE UserID = @UserID");
  
      if (referrerCheck.recordset.length === 0) {
        throw new Error(`Referrer with ID ${referrerID} does not exist`);
      }
  
      const referrerUsername = referrerCheck.recordset[0].Username;
      let referredUsername = null;
  
      // Fetch the referred user's username if referredID is provided
      if (referredID !== null) {
        const referredCheck = await poolRequest()
          .input("UserID", sql.Int, referredID)
          .query("SELECT Username FROM tbl_user WHERE UserID = @UserID");
  
        if (referredCheck.recordset.length === 0) {
          throw new Error(`Referred user with ID ${referredID} does not exist`);
        }
  
        referredUsername = referredCheck.recordset[0].Username;
      }
  
      // Insert the referral into the database
      const result = await poolRequest()
        .input("ReferrerID", sql.Int, referrerID)
        .input("ReferralCode", sql.VarChar(50), referralCode)
        .input("ReferredID", sql.Int, referredID)
        .query(
          `INSERT INTO referrals (ReferrerID, ReferralCode, ReferredID) 
           VALUES (@ReferrerID, @ReferralCode, @ReferredID)`
        );
  
      logger.info("Referral created successfully:", result);
  
      return { referrerID, referrerUsername, referralCode, referredID, referredUsername };
    } catch (error) {
      logger.error("Error creating referral:", error);
      throw error;
    }
  };
  export const getReferralByCodeService = async (referralCode) => {
    try {
      const result = await poolRequest()
        .input("ReferralCode", sql.VarChar(50), referralCode)
        .query(
          `SELECT r.*, u1.Username AS ReferrerUsername, u2.Username AS ReferredUsername 
           FROM referrals r
           JOIN tbl_user u1 ON r.ReferrerID = u1.UserID
           LEFT JOIN tbl_user u2 ON r.ReferredID = u2.UserID
           WHERE r.ReferralCode = @ReferralCode`
        );
  
      if (result.recordset.length === 0) {
        throw new Error(`Referral with code ${referralCode} does not exist`);
      }
  
      const referral = result.recordset[0];
      logger.info("Referral retrieved successfully:", referral);
  
      return {
        referralID: referral.ReferralID,
        referrerID: referral.ReferrerID,
        referrerUsername: referral.ReferrerUsername,
        referralCode: referral.ReferralCode,
        referredID: referral.ReferredID,
        referredUsername: referral.ReferredUsername
      };
    } catch (error) {
      logger.error("Error retrieving referral:", error);
      throw error;
    }
  };
  
  export const getAllReferralsService = async () => {
    try {
      const result = await poolRequest().query(`
        SELECT 
          r.*, 
          referrer.Username AS ReferrerUsername, 
          referred.Username AS ReferredUsername 
        FROM 
          referrals r
          LEFT JOIN tbl_user referrer ON r.ReferrerID = referrer.UserID
          LEFT JOIN tbl_user referred ON r.ReferredID = referred.UserID
      `);
      logger.info("All referrals retrieved successfully:", result);
      return result;
    } catch (error) {
      logger.error("Error retrieving all referrals:", error);
      throw error;
    }
  };
  
  export const updateReferralService = async (referralCode, referredID) => {
    try {
      const result = await poolRequest()
        .input("ReferralCode", sql.VarChar(50), referralCode)
        .input("ReferredID", sql.Int, referredID)
        .query(
          "UPDATE referrals SET ReferredID = @ReferredID WHERE ReferralCode = @ReferralCode"
        );
  
      logger.info("Referral updated successfully:", result);
      return result;
    } catch (error) {
      logger.error("Error updating referral:", error);
      throw error;
    }
  };

  export const getReferralByUserIDService = async (userID) => {
    try {
      const result = await poolRequest()
        .input("UserID", sql.Int, userID)
        .query(`
          SELECT 
            r.*, 
            referrer.Username AS ReferrerUsername, 
            referred.Username AS ReferredUsername 
          FROM 
            referrals r
            LEFT JOIN tbl_user referrer ON r.ReferrerID = referrer.UserID
            LEFT JOIN tbl_user referred ON r.ReferredID = referred.UserID
          WHERE 
            r.ReferrerID = @UserID OR r.ReferredID = @UserID
        `);
  
      logger.info("Referral retrieved by user ID successfully:", result);
      return result;
    } catch (error) {
      logger.error("Error retrieving referral by user ID:", error);
      throw error;
    }
  };
  