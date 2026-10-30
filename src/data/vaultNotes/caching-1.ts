import type { PaperDocument } from "@/types";
import { cacheAsideSnippets } from "@/data/codeSamples";

export const caching_1Note: PaperDocument = {
  id: "caching-1",
  eyebrow: "from the vault",
  topic: "System Design \u00b7 Caching",
  title: "Caching \u2014 Overview",
  blocks: [
    { type: "heading", text: "Overview" },
    { type: "callout", text: "Definition: Caching stores frequently accessed data in a faster storage layer (RAM) to reduce load on the primary data store (disk-based database)." },
    { type: "flow", text: "Why it exists: Databases are slow because they read from disk. RAM is 1000x faster than disk.\nIf 95% of your requests ask for the same data, why read from disk 95 times? Read once, store in\nRAM, serve 94 from RAM." },
    { type: "paragraph", text: "The fundamental tradeoff: Speed vs freshness. Cached data is fast but might be stale. Every caching decision is about how much staleness you can tolerate." },
    { type: "flow", text: "Impact math: 95% hit rate, 20K req/sec. Without cache: DB handles 20K req/sec at 50ms each.\nWith cache: DB handles 1K req/sec (5% misses). Redis handles 19K at 0.5ms. Average latency:\n(0.95 x 0.5) + (0.05 x 50) = 2.97ms. That’s a 17x improvement." },
    { type: "heading", text: "Cache Strategies (4 Patterns)" },
    { type: "list", items: ["Cache-Aside (Lazy Loading)"] },
    { type: "callout", text: "Definition: Application checks cache first. On miss, loads from database and populates cache." },
    { type: "paragraph", text: "How it works: 1. Application receives request for data 2. Check cache: key exists? Return cached value (HIT) 3. Key doesn’t exist (MISS): query database 4. Store result in cache with TTL 5. Return result to caller" },
    { type: "paragraph", text: "Characteristics: - Most common pattern — used in ~80% of caching implementations - Cache only stores data that’s actually requested (memory efficient) - First request for any data is always a miss (cold start problem) - Application manages both cache and DB (more code, more control) - Data can become stale if DB is updated without invalidating cache" },
    { type: "codeCell", snippets: cacheAsideSnippets },
    { type: "heading", text: "Tradeoffs:" },
    { type: "heading", text: "Pros                                                 Cons" },
    { type: "paragraph", text: "Memory efficient (only requested data cached) Cold start: first request always misses" },
  ],
};
