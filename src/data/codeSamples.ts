import type { CodeSnippet } from "@/types";

/** Shared multi-language vault examples — Python / JavaScript / Go / Java */

export const dbConnectSnippets: CodeSnippet[] = [
  {
    language: "python",
    code: `# Connect to a separate DB host
import psycopg2

conn = psycopg2.connect(
    host="db-server.internal",
    dbname="myapp",
    user="app_user",
    password="secret",
)`,
  },
  {
    language: "javascript",
    code: `// Connect to a separate DB host
import pg from "pg";

const pool = new pg.Pool({
  host: "db-server.internal",
  database: "myapp",
  user: "app_user",
  password: "secret",
});`,
  },
  {
    language: "go",
    code: `// Connect to a separate DB host
package main

import (
  "database/sql"
  _ "github.com/lib/pq"
)

db, err := sql.Open("postgres",
  "host=db-server.internal user=app_user password=secret dbname=myapp sslmode=disable")`,
  },
  {
    language: "java",
    code: `// Connect to a separate DB host
import java.sql.DriverManager;

var conn = DriverManager.getConnection(
  "jdbc:postgresql://db-server.internal/myapp",
  "app_user",
  "secret"
);`,
  },
];

export const redisSessionSnippets: CodeSnippet[] = [
  {
    language: "python",
    code: `import json
import redis

r = redis.Redis(host="redis-server", port=6379)

def get_session(session_id):
    data = r.get(f"session:{session_id}")
    return json.loads(data) if data else None

def set_session(session_id, user_data):
    r.set(f"session:{session_id}", json.dumps(user_data), ex=3600)
    # Any app server can read this session`,
  },
  {
    language: "javascript",
    code: `import Redis from "ioredis";

const r = new Redis({ host: "redis-server", port: 6379 });

async function getSession(sessionId) {
  const data = await r.get(\`session:\${sessionId}\`);
  return data ? JSON.parse(data) : null;
}

async function setSession(sessionId, userData) {
  await r.set(\`session:\${sessionId}\`, JSON.stringify(userData), "EX", 3600);
  // Any app server can read this session
}`,
  },
  {
    language: "go",
    code: `package main

import (
  "context"
  "encoding/json"
  "time"
  "github.com/redis/go-redis/v9"
)

var r = redis.NewClient(&redis.Options{Addr: "redis-server:6379"})
var ctx = context.Background()

func getSession(id string) (map[string]any, error) {
  data, err := r.Get(ctx, "session:"+id).Bytes()
  if err != nil { return nil, err }
  var out map[string]any
  return out, json.Unmarshal(data, &out)
}

func setSession(id string, userData any) error {
  b, _ := json.Marshal(userData)
  return r.Set(ctx, "session:"+id, b, time.Hour).Err()
}`,
  },
  {
    language: "java",
    code: `import redis.clients.jedis.Jedis;
import com.google.gson.Gson;

Jedis r = new Jedis("redis-server", 6379);
Gson gson = new Gson();

String getSession(String sessionId) {
  return r.get("session:" + sessionId);
}

void setSession(String sessionId, Object userData) {
  r.setex("session:" + sessionId, 3600, gson.toJson(userData));
  // Any app server can read this session
}`,
  },
];

export const loadBalancerSnippets: CodeSnippet[] = [
  {
    language: "python",
    code: `import itertools, random

class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers
        self._cycle = itertools.cycle(servers)
        self._conn_count = {s: 0 for s in servers}

    def round_robin(self):
        """Each server gets requests in turn."""
        return next(self._cycle)

    def least_connections(self):
        """Server with fewest active connections."""
        return min(self._conn_count, key=self._conn_count.get)

    def ip_hash(self, client_ip):
        """Same client always hits same server."""
        return self.servers[hash(client_ip) % len(self.servers)]`,
  },
  {
    language: "javascript",
    code: `class LoadBalancer {
  constructor(servers) {
    this.servers = servers;
    this.index = 0;
    this.connCount = Object.fromEntries(servers.map((s) => [s, 0]));
  }

  roundRobin() {
    const server = this.servers[this.index % this.servers.length];
    this.index += 1;
    return server;
  }

  leastConnections() {
    return this.servers.reduce((a, b) =>
      this.connCount[a] <= this.connCount[b] ? a : b
    );
  }

  ipHash(clientIp) {
    let h = 0;
    for (const ch of clientIp) h = (h + ch.charCodeAt(0)) % this.servers.length;
    return this.servers[h];
  }
}`,
  },
  {
    language: "go",
    code: `package main

type LoadBalancer struct {
  Servers   []string
  index     int
  ConnCount map[string]int
}

func (lb *LoadBalancer) RoundRobin() string {
  s := lb.Servers[lb.index%len(lb.Servers)]
  lb.index++
  return s
}

func (lb *LoadBalancer) LeastConnections() string {
  best := lb.Servers[0]
  for _, s := range lb.Servers[1:] {
    if lb.ConnCount[s] < lb.ConnCount[best] {
      best = s
    }
  }
  return best
}`,
  },
  {
    language: "java",
    code: `import java.util.*;

class LoadBalancer {
  List<String> servers;
  int index = 0;
  Map<String, Integer> connCount = new HashMap<>();

  LoadBalancer(List<String> servers) {
    this.servers = servers;
    for (String s : servers) connCount.put(s, 0);
  }

  String roundRobin() {
    String s = servers.get(index % servers.size());
    index++;
    return s;
  }

  String leastConnections() {
    return Collections.min(servers, Comparator.comparingInt(connCount::get));
  }
}`,
  },
];

export const cacheAsideSnippets: CodeSnippet[] = [
  {
    language: "python",
    code: `def get_product(product_id):
    cache_key = f"product:{product_id}"
    cached = redis.get(cache_key)
    if cached:
        return json.loads(cached)  # ~0.5ms

    product = db.query(
        "SELECT * FROM products WHERE id = %s", product_id
    )  # ~50ms
    redis.set(cache_key, json.dumps(product), ex=300)  # 5 min TTL
    return product`,
  },
  {
    language: "javascript",
    code: `async function getProduct(productId) {
  const cacheKey = \`product:\${productId}\`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached); // ~0.5ms

  const product = await db.query(
    "SELECT * FROM products WHERE id = $1",
    [productId]
  ); // ~50ms
  await redis.set(cacheKey, JSON.stringify(product), "EX", 300);
  return product;
}`,
  },
  {
    language: "go",
    code: `func getProduct(ctx context.Context, productID string) (Product, error) {
  key := "product:" + productID
  if cached, err := rdb.Get(ctx, key).Result(); err == nil {
    var p Product
    json.Unmarshal([]byte(cached), &p) // ~0.5ms
    return p, nil
  }

  p, err := db.QueryProduct(ctx, productID) // ~50ms
  if err != nil { return p, err }
  b, _ := json.Marshal(p)
  rdb.Set(ctx, key, b, 5*time.Minute)
  return p, nil
}`,
  },
  {
    language: "java",
    code: `Product getProduct(String productId) {
  String cacheKey = "product:" + productId;
  String cached = jedis.get(cacheKey);
  if (cached != null) {
    return gson.fromJson(cached, Product.class); // ~0.5ms
  }

  Product product = db.queryProduct(productId); // ~50ms
  jedis.setex(cacheKey, 300, gson.toJson(product));
  return product;
}`,
  },
];

export const shardSnippets: CodeSnippet[] = [
  {
    language: "python",
    code: `def get_shard(user_id, num_shards=4):
    """Determine which shard holds this user's data."""
    return hash(user_id) % num_shards

# user_123 -> shard 3
# user_456 -> shard 0
# Each shard holds ~25% of users`,
  },
  {
    language: "javascript",
    code: `function getShard(userId, numShards = 4) {
  // Determine which shard holds this user's data
  let h = 0;
  for (const ch of userId) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % numShards;
}

// user_123 -> shard 3
// Each shard holds ~25% of users`,
  },
  {
    language: "go",
    code: `import "hash/fnv"

func getShard(userID string, numShards int) int {
  h := fnv.New32a()
  h.Write([]byte(userID))
  return int(h.Sum32()) % numShards
}

// user_123 -> shard 3
// Each shard holds ~25% of users`,
  },
  {
    language: "java",
    code: `int getShard(String userId, int numShards) {
  return Math.floorMod(userId.hashCode(), numShards);
}

// user_123 -> shard 3
// Each shard holds ~25% of users`,
  },
];
