-- delete all entries in the budgets table corresponding to the budget we want to delete
DELETE FROM budgets b WHERE b.budgetId=123;


-- Expected result (entries in the budget table remaining after running this query):
-- id, balance, name, limit, date, note, user_id
-- '345', '98', 'basics', '346','2022-10-15', ''
-- '456', '297', 'necessities', '500','2022-10-17', ''
-- '543', '55', 'fun', '75','2022-10-18', ''
