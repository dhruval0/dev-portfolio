import type { SkillGroup } from "@/types";

/**
 * Skill set — edit anytime; desk only displays this data.
 * Each skill links out to its documentation.
 */

export const skillGroups: SkillGroup[] = [
  {
    id: "expert",
    label: "Expert",
    items: [
      { name: "Python", docsHref: "https://docs.python.org/3/" },
      { name: "FastAPI", docsHref: "https://fastapi.tiangolo.com/" },
      { name: "Flask", docsHref: "https://flask.palletsprojects.com/" },
      { name: "Django", docsHref: "https://docs.djangoproject.com/" },
      { name: "Celery", docsHref: "https://docs.celeryq.dev/" },
      { name: "Kafka", docsHref: "https://kafka.apache.org/documentation/" },
      { name: "MongoDB", docsHref: "https://www.mongodb.com/docs/" },
      {
        name: "PostgreSQL",
        docsHref: "https://www.postgresql.org/docs/current/",
      },
      {
        name: "Elasticsearch",
        docsHref: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
      },
      { name: "Redis", docsHref: "https://redis.io/docs/" },
      { name: "AWS", docsHref: "https://docs.aws.amazon.com/" },
      { name: "Docker", docsHref: "https://docs.docker.com/" },
      { name: "Kubernetes", docsHref: "https://kubernetes.io/docs/home/" },
      {
        name: "REST APIs",
        docsHref: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
      },
    ],
  },
  {
    id: "advanced",
    label: "Advanced",
    items: [
      {
        name: "ksqlDB",
        docsHref: "https://docs.ksqldb.io/",
      },
      {
        name: "OpenTelemetry",
        docsHref: "https://opentelemetry.io/docs/",
      },
      { name: "Grafana", docsHref: "https://grafana.com/docs/" },
      { name: "Sentry", docsHref: "https://docs.sentry.io/" },
      {
        name: "New Relic",
        docsHref: "https://docs.newrelic.com/",
      },
      { name: "Jenkins", docsHref: "https://www.jenkins.io/doc/" },
      {
        name: "CI/CD",
        docsHref: "https://docs.github.com/en/actions",
      },
      { name: "Pytest", docsHref: "https://docs.pytest.org/" },
      { name: "Stripe", docsHref: "https://docs.stripe.com/" },
      {
        name: "PayPal",
        docsHref: "https://developer.paypal.com/docs/",
      },
      {
        name: "Razorpay",
        docsHref: "https://razorpay.com/docs/",
      },
      {
        name: "OAuth2",
        docsHref: "https://oauth.net/2/",
      },
      {
        name: "Protean",
        docsHref: "https://protean-framework.readthedocs.io/",
      },
    ],
  },
  {
    id: "proficient",
    label: "Proficient",
    items: [
      { name: "Go", docsHref: "https://go.dev/doc/" },
      {
        name: "TypeScript",
        docsHref: "https://www.typescriptlang.org/docs/",
      },
      { name: "React", docsHref: "https://react.dev/" },
      { name: "Node.js", docsHref: "https://nodejs.org/docs/latest/api/" },
      { name: "GCP", docsHref: "https://cloud.google.com/docs" },
      { name: "Azure", docsHref: "https://learn.microsoft.com/azure/" },
      { name: "Terraform", docsHref: "https://developer.hashicorp.com/terraform/docs" },
      {
        name: "OpenShift",
        docsHref: "https://docs.openshift.com/",
      },
      { name: "gRPC", docsHref: "https://grpc.io/docs/" },
      { name: "GraphQL", docsHref: "https://graphql.org/learn/" },
      {
        name: "Pub/Sub",
        docsHref: "https://cloud.google.com/pubsub/docs",
      },
      { name: "Next.js", docsHref: "https://nextjs.org/docs" },
      { name: "Express.js", docsHref: "https://expressjs.com/" },
    ],
  },
  {
    id: "ai-llm",
    label: "AI / LLM",
    items: [
      { name: "LangChain", docsHref: "https://python.langchain.com/docs/" },
      { name: "Pinecone", docsHref: "https://docs.pinecone.io/" },
      {
        name: "Hugging Face",
        docsHref: "https://huggingface.co/docs",
      },
      {
        name: "RAG",
        docsHref:
          "https://python.langchain.com/docs/tutorials/rag/",
      },
      {
        name: "Prompt Engineering",
        docsHref: "https://platform.openai.com/docs/guides/prompt-engineering",
      },
      {
        name: "OpenAI APIs",
        docsHref: "https://platform.openai.com/docs",
      },
      {
        name: "Agentic Workflows",
        docsHref: "https://python.langchain.com/docs/tutorials/agents/",
      },
    ],
  },
];
