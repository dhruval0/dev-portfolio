import type { PaperDocument } from "@/types";

export const databases_sql_joins_6Note: PaperDocument = {
  id: "databases-sql-joins-6",
  eyebrow: "from the vault",
  topic: "Databases",
  title: "Databases & SQL \u2014 The N+1 Query Problem",
  blocks: [
    { type: "heading", text: "The N+1 Query Problem" },
    { type: "paragraph", text: "The most common performance bug in backend applications." },
    { type: "flow", text: "# THE BUG: 1 + N queries\norders = db.find({}) # 1 query: get 30 orders\nfor order in orders: # N iterations\n    user = db.find_one({\"_id\": order[\"user_id\"]})         # 1 query per order!" },
    { type: "flow", text: "# Total: 1 + 30 = 31 queries. At 5ms each: 155ms.\n# With 100 orders: 101 queries = 505ms. Terrible." },
    { type: "flow", text: "# FIX 1: Batch with IN clause (2 queries)\norders = list(db.find({}))\nuser_ids = [o[\"user_id\"] for o in orders]\nusers = {u[\"_id\"]: u for u in db.find({\"_id\": {\"$in\": user_ids}})}\nfor order in orders:\n    user = users[order[\"user_id\"]] # O(1) lookup from dict" },
    { type: "flow", text: "# FIX 2: SQL JOIN (1 query)\n# SELECT o.*, u.name FROM orders o JOIN users u ON o.user_id = u.id" },
    { type: "flow", text: "# FIX 3: ORM eager loading (Django)\n# orders = Order.objects.select_related('user').all()" },
    { type: "flow", text: "# FIX 4: MongoDB aggregation pipeline\n# [{\"$lookup\": {\"from\": \"users\", ...}}]" },
    { type: "heading", text: "Window Functions" },
    { type: "flow", text: "-- Rank users by spending\nSELECT u.name, SUM(o.total) AS spent,\n    RANK() OVER (ORDER BY SUM(o.total) DESC) AS rank\nFROM users u JOIN orders o ON u.id = o.user_id\nGROUP BY u.name;" },
    { type: "flow", text: "-- Running total\nSELECT date, revenue,\n    SUM(revenue) OVER (ORDER BY date) AS running_total\nFROM daily_revenue;" },
    { type: "flow", text: "       -- Moving average (7-day)\n       SELECT date, revenue,\n           AVG(revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)\nAS avg_7d\n       FROM daily_revenue;" },
    { type: "flow", text: "-- Difference from previous day\nSELECT date, revenue,\n    revenue - LAG(revenue) OVER (ORDER BY date) AS daily_change\nFROM daily_revenue;" },
    { type: "heading", text: "Cursor-Based Pagination" },
    { type: "flow", text: "-- WRONG: OFFSET pagination (slow for deep pages)\nSELECT * FROM orders ORDER BY created_at DESC OFFSET 100000 LIMIT 20;\n-- Scans 100,020 rows to return 20. Gets slower as offset increases." },
    { type: "flow", text: "-- RIGHT: Cursor pagination (fast at ANY depth)\nSELECT * FROM orders\nWHERE created_at < '2024-09-15T14:30:00Z' -- cursor from previous page" },
    { type: "heading", text: "ORDER BY created_at DESC" },
    { type: "flow", text: "LIMIT 20;\n-- Uses index on created_at. Always scans exactly 20 rows." },
  ],
};
