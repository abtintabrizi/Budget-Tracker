-- group by type from budget 123 and sum over the amount for each type
SELECT type, SUM(amount) AS amount FROM budgetplannerdb.expenses WHERE budgetId=123 GROUP BY type;


