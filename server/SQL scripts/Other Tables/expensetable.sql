CREATE TABLE `expenses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `amount` int NOT NULL,
  `type` varchar(45) NOT NULL,
  `date` datetime DEFAULT NULL,
  `to` varchar(45) DEFAULT NULL,
  `note` varchar(45) DEFAULT NULL,
  `budgetId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO expenses (amount, type, budgetId)
	VALUES (100, 'groceries', 123);

INSERT INTO expenses (amount, type, budgetId)
	VALUES (50, 'groceries', 123);

INSERT INTO expenses (amount, type, budgetId)
	VALUES (450, 'rent', 123);
    
INSERT INTO expenses (amount, type, budgetId)
	VALUES (80, 'car', 123);

INSERT INTO expenses (amount, type, budgetId)
	VALUES (133, 'car', 123);
    
INSERT INTO expenses (amount, type, budgetId)
	VALUES (133, 'car', 456);
    
INSERT INTO expenses (amount, type, budgetId)
	VALUES (178, 'groceries', 345);

INSERT INTO expenses (amount, type, budgetId)
	VALUES (70, 'electronics', 123);
    
INSERT INTO expenses (amount, type, budgetId)
	VALUES (70, 'electronics', 456);
    
INSERT INTO expenses (amount, type, budgetId)
	VALUES (70, 'electronics', 345);

INSERT INTO expenses (amount, type, budgetId)
	VALUES (50, 'going out', 123);
    
INSERT INTO expenses (amount, type, budgetId)
	VALUES (75, 'going out', 123);

INSERT INTO expenses (amount, type, budgetId)
	VALUES (30, 'going out', 123);
    
INSERT INTO expenses (amount, type, budgetId)
	VALUES (20, 'going out', 543);
    