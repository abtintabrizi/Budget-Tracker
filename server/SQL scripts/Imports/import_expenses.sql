DELETE FROM budgetplannerdb.expenses;

LOAD DATA LOCAL INFILE  'absolute path to csv file'
INTO TABLE budgetplannerdb.expenses
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;