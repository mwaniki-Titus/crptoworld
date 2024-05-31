import {
  createReferralService,
  getReferralByCodeService,
  updateReferralService,
  getAllReferralsService
} from "../services/referalServices.js";
import logger from "../utils/logger.js";

export const createReferralController = async (req, res) => {
  try {
    const { referrerID, referralCode, referredID } = req.body;
    const result = await createReferralService(referrerID, referralCode, referredID);
    logger.info("Referral created:", result);
    res.status(201).json(result);
  } catch (error) {
    logger.error("Error creating referral:", error);
    res.status(400).json({ error: error.message || "Internal server error" });
  }
};

export const getReferralByCodeController = async (req, res) => {
  try {
    const { referralCode } = req.params;
    const result = await getReferralByCodeService(referralCode);
    logger.info("Referral retrieved:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error retrieving referral:", error);
    res.status(400).json({ error: error.message || "Internal server error" });
  }
};

export const updateReferralController = async (req, res) => {
  try {
    const { referralCode, referredID } = req.body;
    const result = await updateReferralService(referralCode, referredID);
    logger.info("Referral updated:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error updating referral:", error);
    res.status(400).json({ error: error.message || "Internal server error" });
  }
};
export const getAllReferralsController = async (req, res) => {
  try {
    const result = await getAllReferralsService();
    const referralsWithUsernames = result.recordset.map(referral => ({
      referralID: referral.ReferralID,
      referrerID: referral.ReferrerID,
      referrerUsername: referral.ReferrerUsername,
      referralCode: referral.ReferralCode,
      referredID: referral.ReferredID,
      referredUsername: referral.ReferredUsername
    }));
    logger.info("All referrals retrieved:", referralsWithUsernames);
    res.status(200).json(referralsWithUsernames);
  } catch (error) {
    logger.error("Error retrieving all referrals:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getReferralByUserController = async (req, res) => {
  try {
    const { userID } = req.params;
    const result = await getReferralByUserIDService(userID);
    const referralsWithUsernames = result.recordset.map(referral => ({
      referralID: referral.ReferralID,
      referrerID: referral.ReferrerID,
      referrerUsername: referral.ReferrerUsername,
      referralCode: referral.ReferralCode,
      referredID: referral.ReferredID,
      referredUsername: referral.ReferredUsername
    }));
    logger.info("Referral retrieved by user ID:", referralsWithUsernames);
    res.status(200).json(referralsWithUsernames);
  } catch (error) {
    logger.error("Error retrieving referral by user ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
