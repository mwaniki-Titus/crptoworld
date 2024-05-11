import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";
import { poolRequest, sql } from "../utils/dbConnect.js";

export const registerUserService = async (newUser) => {
  try {
    const hashedPassword = await bcrypt.hash(newUser.Password, 10); // Hashing the password before storing
    const newRegisteredUser = await poolRequest()
      .input("Username", sql.VarChar(255), newUser.Username)
      .input("Email", sql.VarChar(255), newUser.Email)
      .input("Password", sql.VarChar(255), hashedPassword)
      .query(
        "INSERT INTO tbl_user(Username, Email, Password) VALUES(@Username, @Email, @Password)"
      );
    logger.info("New user registered successfully:", newRegisteredUser);
    return newRegisteredUser;
  } catch (error) {
    logger.error("Error while registering:", error);
    return { error: "Error while registering new user" };
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
        return { error: 'Invalid credentials' };
      }
    } else {
      return { error: "User not found" };
    }
  } catch (error) {
    logger.error("Login Error:", error);
    return { error: "Error while authenticating user" };
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
    return { error: "Error while updating user" };
  }
};

export const updatePasswordService = async (updatePassword) => {
  try {
    const hashedPassword = await bcrypt.hash(updatePassword.Password, 10); // Hashing the new password before updating
    const updatedPassword = await poolRequest()
      .input("UserID", sql.Int, updatePassword.UserID)
      .input("Password", sql.VarChar(255), hashedPassword)
      .query("UPDATE tbl_user SET Password = @Password WHERE UserID = @UserID");
    logger.info("Password updated successfully:", updatedPassword);
    return updatedPassword;
  } catch (error) {
    logger.error("Error while updating password:", error);
    return { error: "Error while updating password" };
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
    return { error: "Error while retrieving single user" };
  }
};

export const getAllUsersService = async () => {
  try {
    const allUsers = await poolRequest().query(`SELECT * FROM tbl_user`);
    logger.info("All users retrieved successfully:", allUsers);
    return allUsers;
  } catch (error) {
    logger.error("Error while retrieving all users:", error);
    return { error: "Error while retrieving all users" };
  }
};
