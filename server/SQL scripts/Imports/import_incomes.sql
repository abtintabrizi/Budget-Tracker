DELETE FROM budgetplannerdb.incomes;

LOAD DATA LOCAL INFILE  'absolute path to csv file'
INTO TABLE budgetplannerdb.incomes
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;