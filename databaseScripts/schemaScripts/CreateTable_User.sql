CREATE TABLE IF NOT EXISTS  user (
	userId   					Int(10) unsigned 	NOT NULL AUTO_INCREMENT
,	name          				Varchar(255)        NOT NULL DEFAULT ''
,	email        				Varchar(255)        NOT NULL DEFAULT ''
,	password       				Varchar(255)        NOT NULL DEFAULT ''
,	PRIMARY KEY ( userId )
)