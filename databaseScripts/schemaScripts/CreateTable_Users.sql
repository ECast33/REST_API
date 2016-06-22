CREATE TABLE IF NOT EXISTS  users (
	userId   					Int(10) unsigned 	NOT NULL AUTO_INCREMENT
,	firstName    				Varchar(255)        NOT NULL DEFAULT ''
,	LastName    				Varchar(255)        NOT NULL DEFAULT ''
,	email        				Varchar(255)        NOT NULL DEFAULT ''
,	password       				Varchar(255)        NOT NULL DEFAULT ''
,	PRIMARY KEY ( userId )
)