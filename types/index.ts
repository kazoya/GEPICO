export type Department =
  | "procurement"
  | "production"
  | "quality"
  | "warehouse"
  | "sales"
  | "export"
  | "engineering"
  | "logistics"
  | "management";

export type ProductFamily =
  | "rigid_conduits"
  | "corrugated_conduits"
  | "trunking"
  | "fittings"
  | "circular_boxes"
  | "dry_wall_boxes"
  | "outlet_boxes"
  | "adaptable_boxes"
  | "flush_enclosures"
  | "led_enclosures"
  | "solvent_cement"
  | "installation_accessories";

export type Difficulty = "low" | "medium" | "high";
export type Impact = "low" | "medium" | "high";
export type PilotFit = "strong" | "possible" | "later";
export type AiReadiness = "available_now" | "needs_history" | "needs_iot";

export type WorkflowNode = {
  id: string;
  title: string;
  currentProcess: string;
  requiredData: string[];
  possibleBottleneck: string;
  automationOpportunity: string;
  aiOpportunity: string;
  kpi: string;
  integration: string;
};

export type Bottleneck = {
  id: string;
  title: string;
  department: Department;
  description: string;
  signalToInvestigate: string;
};

export type OpportunityCard = {
  id: string;
  title: string;
  summary: string;
  impact: Impact;
  requiredData: string[];
  difficulty: Difficulty;
  dependencies: string[];
  pilotFit: PilotFit;
  readiness?: AiReadiness;
};

export type CatalogProduct = {
  id: string;
  nameAr: string;
  nameEn: string;
  family: ProductFamily;
  note?: string;
  siteIssue?: string;
};

export type Insight = {
  id: string;
  title: string;
  severity: "info" | "watch" | "action";
  reason: string;
  dataUsed: string[];
  confidence: number;
  recommendedAction: string;
  requiresApproval: boolean;
};

export type KnowledgeAnswer = {
  id: string;
  question: string;
  answer: string;
  citations: { title: string; note: string }[];
};

export type MonthlyKpi = {
  month: string;
  orders: number;
  onTimePct: number;
  labHolds: number;
  exportShipments: number;
  specifierInquiries: number;
  solarSharePct: number;
};

export type ReadinessRow = {
  source: string;
  exists: "unknown" | "yes" | "partial" | "no";
  digital: "unknown" | "yes" | "partial" | "no";
  structured: "unknown" | "yes" | "partial" | "no";
  historicalDepth: string;
  accessible: "unknown" | "yes" | "partial" | "no";
  api: "unknown" | "yes" | "no";
  quality: "unknown" | "low" | "medium" | "high";
  aiReadiness: string;
};

export type DemoBatch = {
  id: string;
  product: string;
  status: "receiving" | "lab_hold" | "released" | "in_process" | "packing" | "warehouse" | "shipped";
  startedAt: string;
  labResult: "pending" | "pass" | "fail";
};

export type DemoSupplier = {
  id: string;
  alias: string;
  material: string;
  reliabilityScore: number;
  lastDelivery: string;
  note: string;
};

export type CrmDeal = {
  id: string;
  account: string;
  channel: string;
  stage: string;
  skuFocus: string;
  owner: string;
};
