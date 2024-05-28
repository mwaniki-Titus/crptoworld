import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";
import { poolRequest, sql } from "../utils/dbConnect.js";

export const registerUserService = async (newUser, isAdmin) => {
  try {

    const existingUserResponse = await poolRequest()
    .input("Email", sql.VarChar(255), newUser.Email)
    .query("SELECT * FROM tbl_user WHERE Email = @Email");

  if (existingUserResponse.recordset.length > 0) {
    throw new Error("Email already exists");
  }

    const hashedPassword = await bcrypt.hash(newUser.Password, 10);
    const newRegisteredUser = await poolRequest()
      .input("Username", sql.VarChar(255), newUser.Username)
      .input("Email", sql.VarChar(255), newUser.Email)
      .input("Password", sql.VarChar(255), hashedPassword)
      .input("isAdmin", sql.Bit, isAdmin)
      .query(
        "INSERT INTO tbl_user(Username, Email, Password, isAdmin) VALUES(@Username, @Email, @Password, @isAdmin)"
      );
    logger.info("New user registered successfully:", newRegisteredUser);
    return newRegisteredUser;
  } catch (error) {
    logger.error("Error while registering:", error);
    throw error;
  }
};

export const authenticateLoginUserService = async (user) => {
  try {
    const userFoundResponse = await poolRequest()
      .input("Email", sql.VarChar(255), user.Email)
      .query("SELECT * FROM tbl_user WHERE Email = @Email");
      
    if (userFoundResponse.recordset[0]) {
      const userRecord = userFoundResponse.recordset[0];
      if (await bcrypt.compare(user.Password, userRecord.Password)) {
        const token = jwt.sign({
          UserID: userRecord.UserID,
          Email: userRecord.Email
        }, process.env.SECRET_KEY, { expiresIn: "24h" });
        return { user: userRecord, token: `JWT ${token}` };
      } else {
        throw new Error('Invalid credentials');
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    logger.error("Login Error:", error);
    throw error;
  }
};

export const updateUserService = async (updateUser) => {
  try {
    const updatedUser = await poolRequest()
      .input('Username', sql.VarChar(255), updateUser.Username)
      .input('UserID', sql.Int, updateUser.UserID)
      .input('Balance', sql.Decimal(18, 2), updateUser.Balance)
      .query(`UPDATE tbl_user SET Username = @Username, Balance = @Balance WHERE UserID = @UserID`);
    logger.info("User updated successfully:", updatedUser);
    return updatedUser;
  } catch (error) {
    logger.error("Error while updating user:", error);
    throw error;
  }
};

export const updatePasswordService = async (updatePassword) => {
  try {
    const hashedPassword = await bcrypt.hash(updatePassword.Password, 10);
    const updatedPassword = await poolRequest()
      .input("UserID", sql.Int, updatePassword.UserID)
      .input("Password", sql.VarChar(255), hashedPassword)
      .query("UPDATE tbl_user SET Password = @Password WHERE UserID = @UserID");
    logger.info("Password updated successfully:", updatedPassword);
    return updatedPassword;
  } catch (error) {
    logger.error("Error while updating password:", error);
    throw error;
  }
};

export const getSingleUserService = async (UserID) => {
  try {
    const singleUser = await poolRequest()
      .input('UserID', sql.Int, UserID)
      .query('SELECT * FROM tbl_user WHERE UserID = @UserID');
    logger.info("Single user retrieved successfully:", singleUser);
    return singleUser;
  } catch (error) {
    logger.error("Error while retrieving single user:", error);
    throw error;
  }
};

export const getAllUsersService = async () => {
  try {
    const allUsers = await poolRequest().query(`SELECT * FROM tbl_user`);
    logger.info("All users retrieved successfully:", allUsers);
    return allUsers;
  } catch (error) {
    logger.error("Error while retrieving all users:", error);
    throw error;
  }
};

export const deleteUserService = async (UserID) => {
  try {
    const deletedUser = await poolRequest()
      .input('UserID', sql.Int, UserID)
      .query('DELETE FROM tbl_user WHERE UserID = @UserID');
    console.log('User deleted successfully:', deletedUser);
    return deletedUser;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export const suspendUserService = async (UserID) => {
  try {
    const suspendedUser = await poolRequest()
      .input('UserID', sql.Int, UserID)
      .query('UPDATE tbl_user SET Status = "suspended" WHERE UserID = @UserID');
    console.log('User suspended successfully:', suspendedUser);
    return suspendedUser;
  } catch (error) {
    console.error('Error suspending user:', error);
    throw error;
  }
};