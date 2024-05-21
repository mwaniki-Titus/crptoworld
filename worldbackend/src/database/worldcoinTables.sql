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
drop table tbl_user

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
drop table grants

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
drop table transactions

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
drop table payments
