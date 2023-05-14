CREATE TABLE `budgetplannerdb`.`expenses` (
  `expenseId` INT NOT NULL AUTO_INCREMENT,
  `budgetId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `amount` DECIMAL(7,2) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  `to` VARCHAR(45) NOT NULL,
  `note` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`expenseId`,`budgetId`),
  UNIQUE KEY `expenseId_UNIQUE` (`expenseId`),
  KEY `budgetId_idx` (`budgetId`),
  CONSTRAINT `budgetId` 
    FOREIGN KEY (`budgetId`) 
    REFERENCES `budgets` (`budgetId`) 
    ON DELETE CASCADE
    ON UPDATE NO ACTION);