import type { IconType } from "react-icons";
import {
  SiApachekafka,
  SiCelery,
  SiDjango,
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiGraphql,
  SiHuggingface,
  SiJenkins,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNewrelic,
  SiOpentelemetry,
  SiPaypal,
  SiPostgresql,
  SiPytest,
  SiPython,
  SiRazorpay,
  SiReact,
  SiRedis,
  SiRedhatopenshift,
  SiSentry,
  SiStripe,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaBrain, FaCogs, FaKey, FaRobot, FaServer } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { TbDatabase, TbPrompt } from "react-icons/tb";
import { HiOutlineSparkles } from "react-icons/hi2";
import { BiNetworkChart } from "react-icons/bi";
import { RiOpenaiFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";

export type SkillIconConfig = {
  Icon: IconType;
  /** Original brand color */
  color: string;
};

/**
 * Tiny logo + original brand color for each skill.
 * Add a skill in skills.ts? Map icon + color here too.
 */
export const skillIcons: Record<string, SkillIconConfig> = {
  // Expert
  Python: { Icon: SiPython, color: "#3776AB" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  Flask: { Icon: SiFlask, color: "#000000" },
  Django: { Icon: SiDjango, color: "#092E20" },
  Celery: { Icon: SiCelery, color: "#37814A" },
  Kafka: { Icon: SiApachekafka, color: "#231F20" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Elasticsearch: { Icon: SiElasticsearch, color: "#005571" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  "REST APIs": { Icon: MdApi, color: "#6C63FF" },

  // Advanced
  ksqlDB: { Icon: TbDatabase, color: "#231F20" },
  OpenTelemetry: { Icon: SiOpentelemetry, color: "#000000" },
  Grafana: { Icon: SiGrafana, color: "#F46800" },
  Sentry: { Icon: SiSentry, color: "#362D59" },
  "New Relic": { Icon: SiNewrelic, color: "#008C99" },
  Jenkins: { Icon: SiJenkins, color: "#D24939" },
  "CI/CD": { Icon: SiGithubactions, color: "#2088FF" },
  Pytest: { Icon: SiPytest, color: "#0A9EDC" },
  Stripe: { Icon: SiStripe, color: "#635BFF" },
  PayPal: { Icon: SiPaypal, color: "#00457C" },
  Razorpay: { Icon: SiRazorpay, color: "#0C2451" },
  OAuth2: { Icon: FaKey, color: "#EB5424" },
  Protean: { Icon: FaCogs, color: "#4A5568" },

  // Proficient
  Go: { Icon: SiGo, color: "#00ADD8" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  GCP: { Icon: SiGooglecloud, color: "#4285F4" },
  Azure: { Icon: VscAzure, color: "#0078D4" },
  Terraform: { Icon: SiTerraform, color: "#7B42BC" },
  OpenShift: { Icon: SiRedhatopenshift, color: "#EE0000" },
  gRPC: { Icon: BiNetworkChart, color: "#244C5A" },
  GraphQL: { Icon: SiGraphql, color: "#E10098" },
  "Pub/Sub": { Icon: FaServer, color: "#4285F4" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000" },
  "Express.js": { Icon: SiExpress, color: "#000000" },

  // AI / LLM
  LangChain: { Icon: SiLangchain, color: "#1C3C3C" },
  Pinecone: { Icon: TbDatabase, color: "#000000" },
  "Hugging Face": { Icon: SiHuggingface, color: "#FFD21E" },
  RAG: { Icon: FaBrain, color: "#7C3AED" },
  "Prompt Engineering": { Icon: TbPrompt, color: "#F59E0B" },
  "OpenAI APIs": { Icon: RiOpenaiFill, color: "#412991" },
  "Agentic Workflows": { Icon: FaRobot, color: "#10B981" },
};

const fallback: SkillIconConfig = {
  Icon: HiOutlineSparkles,
  color: "#A89F93",
};

export function getSkillIcon(skill: string): SkillIconConfig {
  return skillIcons[skill] ?? fallback;
}
