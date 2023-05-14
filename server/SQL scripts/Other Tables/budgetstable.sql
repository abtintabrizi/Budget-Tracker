CREATE TABLE `budgets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `budgetName` varchar(45) NOT NULL,
  `budgetTotal` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO budgets (id, budgetName, budgetTotal)
	VALUES(123, 'September', 1000);

INSERT INTO budgets (id, budgetName, budgetTotal)
    VALUES(456, 'August', 800);
    
INSERT INTO budgets (id, budgetName, budgetTotal)
    VALUES(345, 'July', 800);

INSERT INTO budgets (id, budgetName, budgetTotal)
    VALUES(543, 'June', 800);
    