import type { PaperDocument } from "@/types";

export const databases_sql_joins_7Note: PaperDocument = {
  id: "databases-sql-joins-7",
  eyebrow: "from the vault",
  topic: "Databases",
  title: "Databases & SQL \u2014 CQRS Pattern",
  blocks: [
    { type: "heading", text: "CQRS Pattern" },
    { type: "paragraph", text: "Write side (SQL, normalized, JOINs for consistency):" },
    { type: "flow", text: "INSERT INTO orders (user_id, total) VALUES ('u1', 500);\nINSERT INTO order_items (order_id, product_id, qty) VALUES (1, 'p1', 2);" },
    { type: "paragraph", text: "Read side (denormalized, no JOINs): Kafka event → consumer builds flat Elasticsearch document:" },
    { type: "flow", text: "{\n     \"order_id\": 1,\n     \"user_name\": \"Dhruval\",\n     \"city\": \"Bengaluru\",\n     \"items\": [{\"product\": \"Pizza\", \"qty\": 2, \"price\": 250}],\n     \"total\": 500\n}" },
    { type: "paragraph", text: "Read query: one document fetch. No JOINs. 5ms. The JOIN happened ONCE (during sync), not on every read." },
  ],
};
