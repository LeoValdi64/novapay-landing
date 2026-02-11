import {
  Globe,
  Shield,
  BarChart3,
  CreditCard,
  Code,
  Server,
  Settings,
  Rocket,
  ArrowRight,
  Check,
  Zap,
  Menu,
  Twitter,
  Github,
  Linkedin,
  ChevronRight,
  Lock,
  Star,
} from "lucide-react";

/* ──────────────────────────────────────────
   Navigation
   ────────────────────────────────────────── */

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white sm:text-xl">
            NovaPay
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#integrations"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Integrations
          </a>
          <a
            href="#about"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            About
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        <button
          className="text-zinc-400 md:hidden"
          aria-label="Open menu"
          type="button"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="dot-pattern relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-32">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-1/4 h-[250px] w-[250px] translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="animate-fade-in-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-300 sm:mb-6 sm:px-4 sm:text-sm">
              <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Now processing $12B+ annually
            </div>

            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-white sm:mb-6 sm:text-4xl md:text-6xl md:leading-[1.1]">
              Payment Infrastructure{" "}
              <span className="gradient-text">for the Internet</span>
            </h1>

            <p className="mb-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:mb-8 sm:text-lg">
              A unified API to accept payments, manage subscriptions, and
              prevent fraud. Built for developers who demand reliability at
              scale.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-base"
              >
                Start Building
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white sm:text-base"
              >
                View Documentation
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right column — Code preview */}
          <div className="animate-fade-in-up delay-200 opacity-0">
            <div className="code-block animate-pulse-glow overflow-hidden p-1">
              <div className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60 sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60 sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60 sm:h-3 sm:w-3" />
                <span className="ml-2 text-xs text-zinc-500">
                  payment.ts
                </span>
              </div>
              <div className="overflow-x-auto px-3 pb-3 font-mono text-xs leading-relaxed sm:px-4 sm:pb-4 sm:text-sm">
                <p className="text-zinc-500">
                  {"// Create a payment intent"}
                </p>
                <p className="whitespace-nowrap">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-300">payment</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-violet-400">await</span>{" "}
                  <span className="text-yellow-300">novapay</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-blue-300">payments</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-green-300">create</span>
                  <span className="text-zinc-400">{"({"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">amount</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-orange-300">2000</span>
                  <span className="text-zinc-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">currency</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-green-300">{'"usd"'}</span>
                  <span className="text-zinc-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">method</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-green-300">{'"card"'}</span>
                  <span className="text-zinc-400">,</span>
                </p>
                <p className="pl-4 whitespace-nowrap">
                  <span className="text-blue-300">description</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-green-300">
                    {'"Pro subscription"'}
                  </span>
                  <span className="text-zinc-400">,</span>
                </p>
                <p>
                  <span className="text-zinc-400">{"});"}</span>
                </p>
                <p className="mt-2 text-zinc-500">
                  {"// "}
                  <span className="text-green-400">
                    Payment created successfully
                  </span>
                </p>
                <p className="whitespace-nowrap">
                  <span className="text-violet-400">console</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-blue-300">log</span>
                  <span className="text-zinc-400">(</span>
                  <span className="text-yellow-300">payment</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-blue-300">id</span>
                  <span className="text-zinc-400">);</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Trusted By
   ────────────────────────────────────────── */

const trustedCompanies = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella",
  "Cyberdyne",
  "Wayne Ent.",
  "Stark Ind.",
  "Oscorp",
];

function TrustedBySection() {
  return (
    <section className="border-y border-white/5 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-6 text-center text-xs text-zinc-500 sm:mb-8 sm:text-sm">
          Trusted by 10,000+ businesses worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 sm:gap-y-6">
          {trustedCompanies.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-wide text-zinc-600 transition-colors hover:text-zinc-400 sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Features Grid
   ────────────────────────────────────────── */

const features = [
  {
    icon: Globe,
    title: "Global Payments",
    description:
      "Accept payments in 135+ currencies from customers anywhere in the world with local payment methods.",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description:
      "Machine learning-powered fraud detection that blocks 99.5% of fraudulent transactions in real time.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Comprehensive dashboards with revenue metrics, conversion rates, and predictive insights.",
  },
  {
    icon: CreditCard,
    title: "Subscription Billing",
    description:
      "Flexible recurring billing with smart retries, proration, and dunning management built in.",
  },
  {
    icon: Code,
    title: "Developer Tools",
    description:
      "SDKs for every major language, webhook events, sandbox environments, and detailed API docs.",
  },
  {
    icon: Server,
    title: "99.99% Uptime",
    description:
      "Enterprise-grade infrastructure with multi-region redundancy and automatic failover.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Everything you need to{" "}
            <span className="gradient-text">accept payments</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            A complete toolkit for internet commerce. Handle every payment
            scenario with a single integration.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card group rounded-xl p-5 transition-all duration-300 sm:p-6"
            >
              <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-500/10 p-2.5 sm:mb-4 sm:p-3">
                <feature.icon className="h-5 w-5 text-indigo-400 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   How It Works
   ────────────────────────────────────────── */

const steps = [
  {
    icon: Code,
    step: "01",
    title: "Integrate",
    description:
      "Install our SDK and add a few lines of code to your application. We support every major platform and language.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure",
    description:
      "Set up payment methods, currencies, and business rules through our intuitive dashboard or API.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch",
    description:
      "Go live and start accepting payments globally. Monitor everything in real time from your dashboard.",
  },
];

function HowItWorksSection() {
  return (
    <section className="border-y border-white/5 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Up and running in minutes
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Three simple steps to start accepting payments from anywhere in the
            world.
          </p>
        </div>

        <div className="grid gap-10 sm:gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-indigo-500/40 to-transparent md:block" />
              )}

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 sm:mb-6 sm:h-20 sm:w-20">
                <step.icon className="h-6 w-6 text-indigo-400 sm:h-8 sm:w-8" />
              </div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Step {step.step}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white sm:mb-3 sm:text-xl">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Pricing Section
   ────────────────────────────────────────── */

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description:
      "Perfect for small businesses and side projects getting started.",
    rate: "2.9% + 30c per transaction",
    features: [
      "Unlimited API calls",
      "Basic analytics dashboard",
      "Email support",
      "2 team members",
      "Standard payouts (T+2)",
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    description:
      "For growing businesses that need advanced features and priority support.",
    rate: "2.5% + 25c per transaction",
    features: [
      "Everything in Starter",
      "Advanced analytics & reports",
      "Priority email & chat support",
      "Unlimited team members",
      "Fast payouts (T+1)",
      "Custom payment page",
      "Webhook management",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For large-scale operations with custom requirements and SLAs.",
    rate: "Volume-based pricing",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom SLA & uptime guarantee",
      "SOC 2 & PCI compliance reports",
      "Instant payouts",
      "White-label solution",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Start for free, then scale as you grow. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card relative rounded-2xl p-6 transition-all duration-300 sm:p-8 ${
                tier.popular ? "pricing-popular" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="mb-1 text-lg font-semibold text-white">
                {tier.name}
              </h3>
              <p className="mb-4 text-sm text-zinc-500 sm:mb-6">
                {tier.description}
              </p>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white sm:text-4xl">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-zinc-500">{tier.period}</span>
                )}
              </div>
              <p className="mb-6 text-sm text-indigo-400 sm:mb-8">
                {tier.rate}
              </p>

              <ul className="mb-6 space-y-3 sm:mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block w-full rounded-lg py-3 text-center text-sm font-medium transition-all ${
                  tier.popular
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90"
                    : "border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Integration Partners
   ────────────────────────────────────────── */

const integrations = [
  "Stripe",
  "Shopify",
  "WooCommerce",
  "BigCommerce",
  "Magento",
  "Salesforce",
  "QuickBooks",
  "Xero",
  "HubSpot",
  "Zapier",
  "Slack",
  "Twilio",
];

function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="border-y border-white/5 py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Integrates with your stack
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Connect NovaPay with hundreds of tools and platforms you already
            use.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {integrations.map((name) => (
            <div
              key={name}
              className="glass-card flex items-center justify-center rounded-xl px-3 py-4 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:text-white sm:px-4 sm:py-6"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Testimonials
   ────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "NovaPay reduced our payment integration time from weeks to hours. The API is incredibly well-designed and the documentation is best in class.",
    name: "Sarah Chen",
    title: "CTO",
    company: "Streamline Commerce",
  },
  {
    quote:
      "We moved our entire payment stack to NovaPay and saw a 23% increase in successful transactions. Their fraud detection alone has saved us hundreds of thousands.",
    name: "Marcus Rodriguez",
    title: "VP of Engineering",
    company: "DataFlow Systems",
  },
  {
    quote:
      "The developer experience is unmatched. Webhooks work flawlessly, the sandbox environment is production-accurate, and the support team actually understands our code.",
    name: "Priya Sharma",
    title: "Lead Developer",
    company: "Nexus Digital",
  },
];

function TestimonialsSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Loved by developers & teams
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            See why thousands of companies trust NovaPay to power their
            payments.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-xl p-5 transition-all duration-300 sm:p-6"
            >
              <div className="mb-3 flex gap-1 sm:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-indigo-400 text-indigo-400"
                  />
                ))}
              </div>
              <blockquote className="mb-4 text-sm leading-relaxed text-zinc-300 sm:mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   CTA Section
   ────────────────────────────────────────── */

function CTASection() {
  return (
    <section id="cta" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-card relative overflow-hidden rounded-2xl px-5 py-12 text-center sm:rounded-3xl sm:px-8 md:px-16 md:py-24">
          {/* Background gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10" />

          <div className="relative">
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-5xl">
              Ready to transform your payments?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-base text-zinc-400 sm:mb-10 sm:text-lg">
              Join 10,000+ businesses already using NovaPay. Get started in
              minutes with our free tier.
            </p>

            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-indigo-500"
              />
              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
              <Lock className="h-3 w-3" />
              No credit card required. Free plan available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Footer
   ────────────────────────────────────────── */

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Docs", "Status"],
  Developers: ["API Reference", "SDKs", "Webhooks", "Sandbox", "Libraries"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses", "Security"],
};

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-6 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <a href="#" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NovaPay</span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-zinc-500">
              Payment infrastructure for the internet. Powering commerce for
              businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 text-sm font-semibold text-white sm:mb-4">
                {heading}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:mt-16 md:flex-row">
          <p className="text-sm text-zinc-600">
            2025 NovaPay, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────
   Page Component
   ────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0f] font-sans text-zinc-200">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
