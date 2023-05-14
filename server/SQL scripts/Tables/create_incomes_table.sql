CREATE TABLE `budgetplannerdb`.`incomes` (
  `incomeId` INT NOT NULL AUTO_INCREMENT,
  `budgetId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `amount` DECIMAL(7,2) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  `from` VARCHAR(45) NOT NULL,
  `note` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`incomeId`, `budgetId`),
  UNIQUE INDEX `incomeId_UNIQUE` (`incomeId` ASC) VISIBLE,
  INDEX `budgetId2_idx` (`budgetId` ASC) VISIBLE,
  CONSTRAINT `budgetId2`
    FOREIGN KEY (`budgetId`)
    REFERENCES `budgetplannerdb`.`budgets` (`budgetId`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);