import type { PaperDocument } from "@/types";

export const databases_sql_joins_5Note: PaperDocument = {
  id: "databases-sql-joins-5",
  eyebrow: "from the vault",
  topic: "Databases",
  title: "Databases & SQL \u2014 RIGHT JOIN",
  blocks: [
    { type: "heading", text: "RIGHT JOIN" },
    { type: "paragraph", text: "Returns: ALL from right table + matching from left. Rarely used. Rewrite as LEFT JOIN." },
    { type: "heading", text: "FULL OUTER JOIN" },
    { type: "paragraph", text: "Returns: ALL from BOTH tables. NULLs where no match on either side." },
    { type: "flow", text: "SELECT u.name, o.id\nFROM users u FULL OUTER JOIN orders o ON u.id = o.user_id\nWHERE u.id IS NULL OR o.id IS NULL;\n-- Result: Rahul|NULL, Ananya|NULL, NULL|13\n-- Finds orphaned data on BOTH sides. Used for RECONCILIATION." },
    { type: "paragraph", text: "Use when: Data reconciliation. “Find users without orders AND orders without valid users.” This is the payment reconciliation pattern." },
    { type: "heading", text: "SELF JOIN" },
    { type: "paragraph", text: "Returns: Table joined with itself. For hierarchical data." },
    { type: "flow", text: "SELECT e.name AS employee, m.name AS manager\nFROM employees e LEFT JOIN employees m ON e.manager_id = m.id;\n-- CEO|NULL, CTO|CEO, Dhruval|CTO, Priya|CTO" },
    { type: "heading", text: "CROSS JOIN" },
    { type: "paragraph", text: "Returns: Every combination (A rows x B rows). Rarely used in production." },
  ],
};
