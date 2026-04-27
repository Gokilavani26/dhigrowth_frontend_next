type Plan = {
  duration: string;
  watermark: string;
  subtitle: string;
  isHighlighted: boolean;
};

export default function PricingPlans() {
  const plans: Plan[] = [
    {
      duration: "3-MONTH PLAN:",
      watermark: "3",
      subtitle: "Quick wins and foundational growth growth.",
      isHighlighted: false,
    },
    {
      duration: "6-MONTH PLAN:",
      watermark: "6",
      subtitle: "Long-term strategies for sustained success.",
      isHighlighted: true,
    },
    {
      duration: "CUSTOM PLANS:",
      watermark: "&",
      subtitle: "Tailored timelines to meet your unique goals.",
      isHighlighted: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-headers text-5xl text-center lg:mb-16 mb-12">
        FLEXIBLE GROWTH PLANS FOR EVERY BUSINESS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative max-w-sm overflow-hidden px-8 pt-24 pb-8 rounded-lg border ${plan.isHighlighted
                ? "bg-primary text-white"
                : "bg-white border-2 border-primary/90"
              }`}
          >
            <div className="absolute top-4 right-4 text-8xl opacity-10 font-numeric">
              {plan.watermark}
            </div>

            <div className="relative text-center z-10">
              <h2
                className={`font-headers text-center sub-heading ${plan.isHighlighted ? "text-white" : "text-black"
                  }`}
              >
                {plan.duration}
              </h2>

              <p className="font-body font-bold text-lg mb-8">
                {plan.subtitle}
              </p>

              <ul className="space-y-4 mb-8">
                {[...Array(3)].map((_, i) => (
                  <li
                    key={i}
                    className={`font-sub text-sm pb-4 border-b ${plan.isHighlighted
                        ? "border-white/20"
                        : "border-gray/20"
                      }`}
                  >
                    Quick wins and foundational growth.
                  </li>
                ))}
              </ul>

              <div
                className={`sub-heading font-numeric ${plan.isHighlighted ? "text-white" : "text-gray"
                  }`}
              >
                RS XXX
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}