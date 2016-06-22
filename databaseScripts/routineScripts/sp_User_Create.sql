DROP PROCEDURE IF EXISTS sp_User_Create

-- GO;

CREATE PROCEDURE sp_User_Create
(
    IN pFirstName       Varchar(255)
,	IN pLastName        Varchar(255)
,	IN pEmail           Varchar(255)
,	IN pPassword        Varchar(255)
)
this_proc:BEGIN

DECLARE pUserId 	    Int DEFAULT 0;

INSERT INTO users
(
    firstName
,   lastName
,   email
,   password
)VALUES
(
    pFirstName
,   pLastName
,   pEmail
,   pPassword
);
SET pUserId = LAST_INSERT_ID();

CALL sp_Player_BuilderOne( pEmail, pPassword, pUserId );

END