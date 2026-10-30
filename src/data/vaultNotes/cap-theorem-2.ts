import type { PaperDocument } from "@/types";

export const cap_theorem_2Note: PaperDocument = {
  id: "cap-theorem-2",
  eyebrow: "from the vault",
  topic: "System Design \u00b7 CAP",
  title: "CAP Theorem \u2014 Decision Framework",
  blocks: [
    { type: "heading", text: "Decision Framework" },
    { type: "heading", text: "Choose CP When:" },
    { type: "heading", text: "Scenario                                                  Reason" },
    { type: "flow", text: "Financial transactions                                    Money transfers, account balances must be\n                                                          exact" },
    { type: "paragraph", text: "Banking systems Double-spending prevention, audit compliance" },
    { type: "paragraph", text: "Inventory management Prevent overselling products" },
    { type: "paragraph", text: "Booking systems Airlines, hotels — prevent double bookings" },
    { type: "paragraph", text: "Lock services Distributed locks, leader election" },
    { type: "paragraph", text: "Configuration management Critical system settings must be correct" },
    { type: "paragraph", text: "Medical records Patient safety requires accurate data" },
    { type: "paragraph", text: "Regulatory compliance Legal requirements for data accuracy" },
    { type: "paragraph", text: "Key indicators for CP: Correctness is critical. Stale data causes financial loss or safety issues. Strong ACID guarantees required. Data conflicts are unacceptable." },
    { type: "heading", text: "Choose AP When:" },
  ],
};
