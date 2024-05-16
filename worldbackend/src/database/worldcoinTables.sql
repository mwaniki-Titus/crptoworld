CREATE DATABASE worldcoin
USE worldcoin
-- Users table
CREATE TABLE tbl_user (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Balance DECIMAL(18, 2) NOT NULL DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETDATE(),
    isAdmin BIT DEFAULT 0 NOT NULL 
);

select * from tbl_user

-- Grants table
CREATE TABLE grants (
    GrantID INT IDENTITY(1,1) PRIMARY KEY,
    GrantorID INT NOT NULL,
    GranteeID INT NOT NULL, 
    Privilege VARCHAR(50) NOT NULL, 
    GrantTimestamp DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (GrantorID) REFERENCES tbl_user(UserID),
    FOREIGN KEY (GranteeID) REFERENCES tbl_user(UserID) ,

);

select * from  grants

-- Transactions table
CREATE TABLE transactions (
    TransactionID BIGINT IDENTITY(1,1) PRIMARY KEY,
    SenderID INT NOT NULL,
    ReceiverID INT NOT NULL,
    Amount DECIMAL(18, 2) NOT NULL,
    Timestamp DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (SenderID) REFERENCES tbl_user(UserID), 
    FOREIGN KEY (ReceiverID) REFERENCES tbl_user(UserID) 
);

select * from  transactions

-- Payment table
CREATE TABLE payments (
    PaymentID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT NOT NULL, 
    MerchantID INT,
    Amount DECIMAL(18, 2) NOT NULL,
    Currency VARCHAR(3) NOT NULL,
    PaymentGateway VARCHAR(50) NOT NULL,
    PaymentStatus VARCHAR(20) NOT NULL,
    PaymentTimestamp DATETIME DEFAULT GETDATE(), 
    FOREIGN KEY (UserID) REFERENCES tbl_user(UserID), 
    FOREIGN KEY (MerchantID) REFERENCES tbl_user(UserID)
);

select * from payments

-- Insert dummy data into tbl_user
INSERT INTO tbl_user (Username, Password, Email, Balance, isAdmin)
VALUES 
    ('user1', 'password1', 'user1@example.com', 100.00, 0),
    ('user2', 'password2', 'user2@example.com', 200.00, 0),
    ('admin1', 'adminpass1', 'admin1@example.com', 0.00, 1);

-- Insert dummy data into grants
INSERT INTO grants (GrantorID, GranteeID, Privilege)
VALUES 
    (3, 1, 'Admin Access'),
    (3, 2, 'Transaction Access');

-- Insert dummy data into transactions
INSERT INTO transactions (SenderID, ReceiverID, Amount)
VALUES 
    (1, 2, 50.00),
    (2, 1, 30.00);

-- Insert dummy data into payments
INSERT INTO payments (UserID, MerchantID, Amount, Currency, PaymentGateway, PaymentStatus)
VALUES 
    (1, NULL, 50.00, 'USD', 'Plisio', 'Completed'),
    (2, 3, 30.00, 'EUR', 'Plisio', 'Pending');
