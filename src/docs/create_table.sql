CREATE DATABASE cc_web_app;

CREATE TABLE `cc_web_app`.`web_app` (`sbti_id` INT(11) NOT NULL AUTO_INCREMENT , `client` VARCHAR(60) NOT NULL , `location` VARCHAR(60) NOT NULL , `sublocation` VARCHAR(60) NOT NULL , `contract` VARCHAR(60) NOT NULL , `candidate` VARCHAR(60) NOT NULL , `day` INT(1) NOT NULL , `start_time` DATETIME NOT NULL , `finish_time` DATETIME NOT NULL , `break` INT(2) NOT NULL DEFAULT '0' , `confirmed` BOOLEAN NOT NULL DEFAULT FALSE , `approved` BOOLEAN NOT NULL DEFAULT FALSE , `edited` BOOLEAN NOT NULL DEFAULT FALSE , PRIMARY KEY (`sbti_id`)) ENGINE = InnoDB;

INSERT INTO `web_app` (`sbti_id`, `client`, `location`, `sublocation`, `contract`, `candidate`, `day`, `start_time`, `finish_time`, `break`, `confirmed`, `approved`, `edited`) VALUES (NULL, 'client 1', 'location 1', 'sublocation 1', 'contract 1', 'claudia cardenas', '1', '2023-04-04 06:00:00', '2023-04-04 12:00:00.000000', '60', '0', '0', '0')


ALTER TABLE `web_app` CHANGE `start_time` `start_time` VARCHAR(4) NULL DEFAULT NULL;
ALTER TABLE `web_app` CHANGE `finish_time` `finish_time` VARCHAR(4) NULL DEFAULT NULL;

ALTER TABLE `web_app` ADD `date` DATE NULL AFTER `candidate`;
ALTER TABLE `web_app` ADD `upcoming_shift` BOOLEAN NOT NULL DEFAULT FALSE AFTER `edited`;

INSERT INTO `web_app` (`sbti_id`, `client`, `location`, `sublocation`, `contract`, `candidate`, `date`, `day`, `start_time`, `finish_time`, `break`, `confirmed`, `approved`, `edited`, `upcoming_shift`) VALUES (NULL, 'client 1', 'location 1', 'sublocation 1', 'contract 1', 'claudia cardenas', '2023-04-06', '4', '0600', '1000', '60', '0', '0', '0', '1');