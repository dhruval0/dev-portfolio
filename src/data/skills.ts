import type { SkillGroup } from "@/types";

/**
 * Skill set — edit anytime; desk only displays this data.
 * Grouped by how strong you are with each stack.
 */

export const skillGroups: SkillGroup[] = [
  {
    id: "expert",
    label: "Expert",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "Celery",
      "Kafka",
      "MongoDB",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "REST APIs",
    ],
  },
  {
    id: "advanced",
    label: "Advanced",
    items: [
      "ksqlDB",
      "OpenTelemetry",
      "Grafana",
      "Sentry",
      "New Relic",
      "Jenkins",
      "CI/CD",
      "Pytest",
      "Stripe",
      "PayPal",
      "Razorpay",
      "OAuth2",
      "Protean",
    ],
  },
  {
    id: "proficient",
    label: "Proficient",
    items: [
      "Go",
      "TypeScript",
      "React",
      "Node.js",
      "GCP",
      "Azure",
      "Terraform",
      "OpenShift",
      "gRPC",
      "GraphQL",
      "Pub/Sub",
      "Next.js",
      "Express.js",
    ],
  },
  {
    id: "ai-llm",
    label: "AI / LLM",
    items: [
      "LangChain",
      "Pinecone",
      "Hugging Face",
      "RAG",
      "Prompt Engineering",
      "OpenAI APIs",
      "Agentic Workflows",
    ],
  },
];
