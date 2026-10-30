import type { PaperDocument } from "@/types";

export const design_patternsNote: PaperDocument = {
  id: "design-patterns",
  eyebrow: "from the vault",
  topic: "LLD",
  title: "Design Patterns — Interview Quick Reference",
  blocks: [
    {
      type: "paragraph",
      text: "Pattern decision framework — if you need to… use this pattern.",
    },
    {
      type: "table",
      headers: ["If you need to…", "Pattern", "Python-shaped example"],
      rows: [
        ["One global instance", "Singleton", "DatabasePool.__new__"],
        [
          "Create objects by type/config",
          "Factory",
          'NotificationFactory.create("sms")',
        ],
        [
          "Build complex objects step by step",
          "Builder",
          "QueryBuilder().select().where().build()",
        ],
        [
          "Wrap a third-party library",
          "Adapter",
          "StripeAdapter(PaymentGateway)",
        ],
        ["Add behavior without modifying", "Decorator", "@retry @log_call"],
        [
          "Simplify a complex subsystem",
          "Facade",
          "OrderFacade.place_order()",
        ],
        [
          "Swap algorithms at runtime",
          "Strategy",
          "SurgePricing vs RegularPricing",
        ],
        [
          "React to events / decouple",
          "Observer / Pub-Sub",
          'EventBus.publish("order_placed")',
        ],
        [
          "Queue / undo / retry operations",
          "Command",
          "DebitCommand.execute() / .undo()",
        ],
        [
          "Behavior changes with state",
          "State",
          "Circuit breaker CLOSED / OPEN / HALF_OPEN",
        ],
        [
          "Middleware chains",
          "Chain of Responsibility",
          'FastAPI @app.middleware("http")',
        ],
        [
          "Central communication hub",
          "Mediator",
          "Chat room, Kafka broker",
        ],
        [
          "Save / restore state",
          "Memento",
          "Editor undo, Redis RDB snapshots",
        ],
        [
          "Tree structures (file / folder)",
          "Composite",
          "folder.get_size() recursively",
        ],
        [
          "Share data to save memory",
          "Flyweight",
          "Connection pool, string interning",
        ],
        [
          "Caching / auth / rate-limit proxy",
          "Proxy",
          "CachingProxy.get_user()",
        ],
        [
          "Traverse collections uniformly",
          "Iterator",
          "Paginated DB cursor",
        ],
        [
          "Algorithm skeleton with custom steps",
          "Template Method",
          "ETL: extract / transform / load",
        ],
        [
          "Add operations without modifying classes",
          "Visitor",
          "Tax calculator per order type",
        ],
        [
          "Create families of related objects",
          "Abstract Factory",
          "DarkThemeFactory creates all dark components",
        ],
        [
          "Clone instead of create",
          "Prototype",
          "Template cloning for reports",
        ],
        [
          "Separate abstraction from implementation",
          "Bridge",
          "Notification × Channel (2 dimensions)",
        ],
      ],
    },
  ],
};
