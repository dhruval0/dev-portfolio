import type { PaperDocument } from "@/types";

export const databases_sql_joins_4Note: PaperDocument = {
  id: "databases-sql-joins-4",
  eyebrow: "from the vault",
  topic: "Databases",
  title: "Databases & SQL \u2014 SQL Joins (All 6 Types)",
  blocks: [
    { type: "heading", text: "SQL Joins (All 6 Types)" },
    { type: "heading", text: "Sample Data" },
    { type: "flow", text: "-- users: | id | name   | city      |\n--        | 1 | Dhruval | Bengaluru |" },
    { type: "flow", text: "--          | 2   | Priya     | Mumbai      |\n--          | 3   | Rahul     | Delhi       |\n--          | 4   | Ananya    | Chennai     |" },
    { type: "flow", text: "-- orders: | id | user_id | total | status    |\n--         | 10 | 1       | 500   | completed |\n--         | 11 | 1       | 300   | pending   |\n--         | 12 | 2       | 800   | completed |\n--         | 13 | 5       | 200   | completed | (user 5 doesn't exist!)" },
    { type: "heading", text: "INNER JOIN" },
    { type: "paragraph", text: "Returns: Only rows matching in BOTH tables." },
    { type: "flow", text: "SELECT u.name, o.total\nFROM users u INNER JOIN orders o ON u.id = o.user_id;\n-- Result: Dhruval|500, Dhruval|300, Priya|800\n-- Rahul, Ananya: excluded (no orders)\n-- Order 13: excluded (user 5 doesn't exist)" },
    { type: "paragraph", text: "Use when: Need data from both tables, only care about matches. “Show users who have placed orders.”" },
    { type: "heading", text: "LEFT JOIN" },
    { type: "paragraph", text: "Returns: ALL from left table + matching from right. NULLs where no match." },
    { type: "flow", text: "SELECT u.name, COUNT(o.id) as order_count\nFROM users u LEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.name;\n-- Result: Dhruval|2, Priya|1, Rahul|0, Ananya|0\n-- ALL users appear, even with 0 orders" },
    { type: "paragraph", text: "Use when: Want all items from left table. “All users and their order count, including users with 0 orders.”" },
  ],
};
