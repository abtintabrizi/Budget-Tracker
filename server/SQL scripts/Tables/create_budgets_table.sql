CREATE TABLE `budgetplannerdb`.`budgets` (
  `budgetId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL DEFAULT 1,
  `name` VARCHAR(45) NOT NULL,
  `balance` DECIMAL(7,2) NOT NULL,
  `budgetLimit` DECIMAL(7,2) NOT NULL,
  `date` DATE NOT NULL,
  `note` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`budgetId`, `userId`),
  UNIQUE INDEX `budgetId_UNIQUE` (`budgetId` ASC) VISIBLE,
  INDEX `userId_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `userId`
    FOREIGN KEY (`userId`)
    REFERENCES `budgetplannerdb`.`users` (`userId`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
