DROP PROCEDURE IF EXISTS sp_User_BuilderOne

-- GO;

CREATE PROCEDURE sp_User_BuilderOne
(
    IN pEmail            Varchar(255)
,	IN pPassword         Varchar(255)
,   IN userId            INT
)
this_proc:BEGIN

    SELECT
        userId
    ,   firstName
    ,   lastName
    ,   email
    FROM
        player
    WHERE
        email    = pEmail
    AND password = pPassword;
END