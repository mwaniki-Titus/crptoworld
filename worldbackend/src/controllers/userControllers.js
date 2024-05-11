import {
    getAllUsersService,
    registerUserService,
    authenticateLoginUserService,
    getSingleUserService,
    updateUserService,
    updatePasswordService
  } from "../services/userService.js"; 
  import { userLoginValidation, userRegistrationValidation } from "../validators/userValidator.js"; 
  import { sendServerError, sendCreated } from '../utils/responseHelpers.js'; 
  import bcrypt from 'bcrypt';
  
  export const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsersService();
      return res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching all users:", error);
      return sendServerError(res, "Internal server error");
    }
  };
  
  export const registerUserController = async (req, res) => {
    try {
      const { Username, Email, Password } = req.body;
      
      // Validate user input
      const { error } = userRegistrationValidation({ Username, Email, Password });
      if (error) return res.status(400).send(error.details[0].message);
  
      // Check if user already exists
      const existingUser = await getSingleUserService(Email);
      if (existingUser.recordset.length > 0) {
        return res.status(400).send("User already exists");
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      // Register new user
      const newUser = { Username, Email, Password: hashedPassword };
      const registeredUser = await registerUserService(newUser);
  
      // Respond with success
      return sendCreated(res, "User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error);
      return sendServerError(res, "Error registering user");
    }
  };
  
  export const loginUserController = async (req, res) => {
    try {
      const { Email, Password } = req.body;
  
      // Validate user input
      const { error } = userLoginValidation({ Email, Password });
      if (error) return res.status(400).send(error.details[0].message);
  
      // Authenticate user
      const authResult = await authenticateLoginUserService({ Email, Password });
      if (authResult.error) return res.status(400).send(authResult.error);
  
      // Respond with user data and token
      return res.status(200).json(authResult);
    } catch (error) {
      console.error("Error logging in:", error);
      return sendServerError(res, "Error logging in");
    }
  };
  
  export const updateUserController = async (req, res) => {
    try {
      const { UserID } = req.params;
      const { Username, Email } = req.body;
  
      // Validate user input
      // Assuming update validation logic exists
      // You may want to validate the fields being updated
  
      // Check if user exists
      const existingUser = await getSingleUserService(UserID);
      if (existingUser.recordset.length === 0) {
        return res.status(404).send("User not found");
      }
  
      // Update user
      const updatedUser = await updateUserService({ UserID, Username, Email });
  
      // Respond with success
      return sendCreated(res, "User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      return sendServerError(res, "Error updating user");
    }
  };
  
  export const updateUserPasswordController = async (req, res) => {
    try {
      const { UserID } = req.params;
      const { Password } = req.body;
  
      // Validate user input
      // Assuming update validation logic exists
      // You may want to validate the new password
  
      // Hash password
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      // Update password
      const updatedPassword = await updatePasswordService({ UserID, Password: hashedPassword });
  
      // Respond with success
      return sendCreated(res, "Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error);
      return sendServerError(res, "Error updating password");
    }
  };
  