import type { TechStackSource } from "@/types";

/**
 * GitHub repos whose releases/tags power The Ritual feed.
 * Backend / data / LLM / Docker desk stack.
 */
export const techStackSources: TechStackSource[] = [
  { id: "python", name: "Python", repo: "python/cpython" },
  { id: "llm", name: "LLM · LangChain", repo: "langchain-ai/langchain" },
  { id: "fastapi", name: "FastAPI", repo: "fastapi/fastapi" },
  { id: "flask", name: "Flask", repo: "pallets/flask" },
  { id: "django", name: "Django", repo: "django/django" },
  { id: "go", name: "Go", repo: "golang/go" },
  { id: "elasticsearch", name: "Elasticsearch", repo: "elastic/elasticsearch" },
  { id: "nosql", name: "NoSQL · MongoDB", repo: "mongodb/mongo" },
  { id: "sql", name: "SQL · PostgreSQL", repo: "postgres/postgres" },
  { id: "grafana", name: "Grafana", repo: "grafana/grafana" },
  { id: "docker", name: "Docker", repo: "moby/moby" },
  { id: "docker-compose", name: "Docker Compose", repo: "docker/compose" },
  { id: "docker-cli", name: "Docker CLI", repo: "docker/cli" },
  { id: "docker-buildx", name: "Docker Buildx", repo: "docker/buildx" },
];

export const RITUAL_PAGE_SIZE = 5;
