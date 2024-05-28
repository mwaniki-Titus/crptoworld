import logger from "../utils/logger.js";
import {
  registerUserService,
  authenticateLoginUserService,
  updateUserService,
  updatePasswordService,
  getSingleUserService,
  getAllUsersService,
  deleteUserService,
  suspendUserService
} from "../services/userServices.js";
import { 
  sendNotFound,
  sendServerError,
} from '../helpers/helperFunction.js';     

export const registerUserController = async (req, res) => {
  try {
    const newUser = req.body;
    const isAdmin = newUser.isAdmin || false; 
    const result = await registerUserService(newUser, isAdmin);
    logger.info("User registered:", result);
    res.status(201).json(result);
  } catch (error) {
    logger.error("Error registering user:", error);
    const errorMessage = error.message || "Internal server error";
    res.status(400).json({ error: errorMessage });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const user = req.body;
    const result = await authenticateLoginUserService(user);
    logger.info("User logged in:", result.user);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error logging in:", error);
    const errorMessage = error.message || "Internal server error";
    res.status(401).json({ error: errorMessage });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const updateUser = req.body;
    const result = await updateUserService(updateUser);
    logger.info("User updated:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updatePasswordController = async (req, res) => {
  try {
    const updatePassword = req.body;
    const result = await updatePasswordService(updatePassword);
    logger.info("Password updated:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error updating password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSingleUserController = async (req, res) => {
  try {
    const { UserID } = req.params;
    const result = await getSingleUserService(parseInt(UserID));
    logger.info("Single user retrieved:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error retrieving single user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    const result = await getAllUsersService();
    logger.info("All users retrieved:", result);
    res.status(200).json(result);
  } catch (error) {
    logger.error("Error retrieving all users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const deleteUserController = async (req, res) => {
  const { UserID } = req.params;
  try {
    await deleteUserService(UserID);
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

export const suspendUserController = async (req, res) => {
  const { UserID } = req.params;
  try {
    await suspendUserService(UserID);
    res.status(200).send({ message: 'User suspended successfully' });
  } catch (error) {
    console.error('Error suspending user:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};