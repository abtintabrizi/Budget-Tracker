SELECT budgetId, name, balance + IFNULL(currentBalance, 0) AS budgetBalance, budgetLimit, date, note FROM
    (SELECT t1.budgetId AS cBudgetId, totalIncome - IFNULL(totalExpense, 0) AS currentBalance FROM
        ((SELECT budgetId, SUM(amount) AS totalIncome
        FROM budgetplannerdb.incomes AS i
        GROUP BY budgetId) t1
        LEFT JOIN 
        (SELECT budgetId, SUM(amount) AS totalExpense 
        FROM budgetplannerdb.expenses AS e
        GROUP BY budgetId) t2
        ON t1.budgetId = t2.budgetId)
    UNION
    SELECT t2.budgetId AS cBudgetId, IFNULL(totalIncome, 0) - totalExpense AS currentBalance FROM
        ((SELECT budgetId, SUM(amount) AS totalIncome
        FROM budgetplannerdb.incomes AS i
        GROUP BY budgetId) t1
        RIGHT JOIN 
        (SELECT budgetId, SUM(amount) AS totalExpense 
        FROM budgetplannerdb.expenses AS e
        GROUP BY budgetId) t2
        ON t1.budgetId = t2.budgetId)) AS t3
    RIGHT JOIN budgetplannerdb.budgets AS b
    ON b.budgetId = t3.cBudgetId
ORDER BY date DESC;