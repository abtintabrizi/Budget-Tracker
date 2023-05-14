CREATE TABLE `Incomes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `amount` int NOT NULL,
  `type` varchar(45) NOT NULL,
  `date` datetime DEFAULT NULL,
  `from` varchar(45) DEFAULT NULL,
  `note` varchar(45) DEFAULT NULL,
  `budgetId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
