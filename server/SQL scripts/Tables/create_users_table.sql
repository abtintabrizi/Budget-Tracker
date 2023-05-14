CREATE TABLE `budgetplannerdb`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `balance` DECIMAL(8,2) NOT NULL default 0,
  `userLimit` DECIMAL(8,2) NOT NULL default 0,
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE);

INSERT INTO budgetplannerdb.users
VALUES (1, "test", "test", 0, 0);
