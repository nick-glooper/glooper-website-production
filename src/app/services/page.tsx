import { Button } from '@/components/ui/Button';
import { GlooperLogo } from '@/components/ui/GlooperLogo';
import { 
  CheckCircle, 
  Clock, 
  Target, 
  Users, 
  Brain,
  Shield,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Star,
  Award,
  Heart,
  Zap
} from 'lucide-react';

export const metadata = {
  title: 'Services - Accessibility Audits & Neurodivergent Design Consultation',
  description: 'Professional accessibility audits, design consultation, and tool development focused on neurodivergent users. Make your digital presence welcoming to 20% more customers.',
  keywords: ['accessibility audit', 'neurodivergent design', 'ADHD design consultation', 'autism accessibility', 'WCAG compliance', 'tool development'],
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <GlooperLogo size={64} />
            </div>
            <h1 className="text-[var(--font-size-4xl)] lg:text-[var(--font-size-5xl)] font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-[var(--font-size-lg)] lg:text-[var(--font-size-xl)] text-[var(--text-secondary)] leading-relaxed mb-8">
              Making Digital Experiences Accessible for Everyone
            </p>
            <div className="bg-[var(--warning-light)] rounded-[var(--radius-lg)] p-6 border-l-4 border-[var(--warning)]">
              <p className="text-[var(--font-size-lg)] font-semibold text-[var(--warning)] mb-2">
                1 in 5 of your customers are neurodivergent.
              </p>
              <p className="text-[var(--warning)]">
                They may have ADHD, autism, dyslexia, or other neurological differences that make standard websites and applications overwhelming or difficult to use. By improving accessibility, you&apos;re not just doing the right thing—you&apos;re unlocking 20% more successful customer interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Accessibility Audit */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-[var(--surface-primary)] rounded-[var(--radius-2xl)] p-8 lg:p-12 border border-[var(--border-primary)]">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-[var(--primary-500)]" />
                  <div>
                    <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)]">
                      Website Accessibility Audit
                    </h2>
                    <p className="text-[var(--font-size-xl)] text-[var(--primary-500)] font-semibold">
                      £495 • Complete Analysis & Recommendations
                    </p>
                  </div>
                </div>
                <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] mb-8 font-medium">
                  Discover exactly how neurodivergent-friendly your digital presence really is
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">AI-powered analysis</p>
                      <p className="text-[var(--text-secondary)] text-sm">Against 47 research-backed accessibility criteria specifically designed for neurodivergent users</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Detailed report</p>
                      <p className="text-[var(--text-secondary)] text-sm">Highlighting specific barriers for ADHD, autism, dyslexia, and other neurological differences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Prioritized action plan</p>
                      <p className="text-[var(--text-secondary)] text-sm">Quick wins you can implement today and long-term strategic improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Step-by-step implementation guides</p>
                      <p className="text-[var(--text-secondary)] text-sm">With code examples and design recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Business impact analysis</p>
                      <p className="text-[var(--text-secondary)] text-sm">Showing potential conversion rate improvements and revenue impact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">WCAG 2.1 AA/AAA compliance assessment</p>
                      <p className="text-[var(--text-secondary)] text-sm">To meet legal accessibility requirements</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full lg:w-auto">
                  Get Complete Report - £495
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="bg-[var(--primary-50)] rounded-[var(--radius-lg)] p-6">
                  <h3 className="font-semibold text-[var(--primary-700)] mb-2">Perfect For:</h3>
                  <p className="text-[var(--primary-600)]">
                    Any business wanting to understand how their website performs for neurodivergent users and get a clear roadmap for improvement.
                  </p>
                </div>

                <div className="bg-[var(--success-light)] rounded-[var(--radius-lg)] p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[var(--success)]" />
                    <h3 className="font-semibold text-[var(--success)]">Timeline:</h3>
                  </div>
                  <p className="text-[var(--success)]">5-7 business days from submission</p>
                </div>

                <div className="bg-[var(--warning-light)] rounded-[var(--radius-lg)] p-6 border-l-4 border-[var(--warning)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-[var(--warning)]" />
                    <h3 className="font-semibold text-[var(--warning)]">Bonus:</h3>
                  </div>
                  <p className="text-[var(--warning)]">
                    £995 discount on any subsequent project valued over £4,950
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Tool Development */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              Simple Tool Development
            </h2>
            <p className="text-[var(--font-size-xl)] text-[var(--text-secondary)] mb-6">
              Custom Solutions That Actually Work
            </p>
            <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)]">
              We design and build focused, single-purpose digital tools that work beautifully for neurodivergent users
            </p>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h3 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-8 text-center">
              Our Process
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[var(--primary-100)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--primary-500)] font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Discovery Questionnaire</h4>
                <p className="text-[var(--text-secondary)]">
                  Complete our detailed online questionnaire about your specific needs and goals
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[var(--primary-100)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--primary-500)] font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">AI-Powered Analysis</h4>
                <p className="text-[var(--text-secondary)]">
                  Our system analyzes your requirements and generates a tailored design brief
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[var(--primary-100)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--primary-500)] font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Proof of Concept Development</h4>
                <p className="text-[var(--text-secondary)]">
                  We build a working prototype based on complexity level
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <div className="text-center mb-6">
                <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)] mb-2">
                  Basic Proof of Concept
                </h3>
                <p className="text-[var(--font-size-3xl)] font-bold text-[var(--primary-500)] mb-4">
                  £1,950
                </p>
                <p className="text-[var(--text-secondary)]">
                  Perfect for simple, focused tools like calculators, timers, basic forms, or simple productivity apps.
                </p>
              </div>
            </div>

            <div className="bg-[var(--primary-500)] rounded-[var(--radius-xl)] p-8 border-2 border-[var(--primary-400)] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[var(--warning)] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-[var(--font-size-xl)] font-bold text-white mb-2">
                  Standard Proof of Concept
                </h3>
                <p className="text-[var(--font-size-3xl)] font-bold text-white mb-4">
                  £3,950
                </p>
                <p className="text-blue-100">
                  More complex functionality including data storage, user accounts, integrations with external services, and advanced user interfaces.
                </p>
              </div>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <div className="text-center mb-6">
                <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)] mb-2">
                  Advanced Proof of Concept
                </h3>
                <p className="text-[var(--font-size-3xl)] font-bold text-[var(--primary-500)] mb-4">
                  £5,950
                </p>
                <p className="text-[var(--text-secondary)]">
                  Sophisticated tools with multiple integrations, advanced features, complex workflows, and enterprise-level functionality.
                </p>
              </div>
            </div>
          </div>

          {/* What You Receive */}
          <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
            <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)] mb-6 text-center">
              What You Receive
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">Working prototype demonstrating core functionality</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">Detailed development proposal for the full version</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">User testing recommendations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">Technical documentation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">Deployment guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Consultation */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              Design Consultation
            </h2>
            <p className="text-[var(--font-size-xl)] text-[var(--text-secondary)]">
              Expert Guidance for Neurodivergent-Friendly Design
            </p>
          </div>

          {/* Free Discovery Session */}
          <div className="bg-[var(--success-light)] rounded-[var(--radius-xl)] p-8 mb-12 border-l-4 border-[var(--success)]">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-[var(--font-size-2xl)] font-bold text-[var(--success)] mb-4">
                  Free Discovery Session (1 Hour)
                </h3>
                <p className="text-[var(--success)] mb-6">
                  We start every relationship with a comprehensive discussion about your specific challenges and goals:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                    <span className="text-[var(--success)]">Review your current digital presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                    <span className="text-[var(--success)]">Identify key opportunities for improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                    <span className="text-[var(--success)]">Understand your users and business objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                    <span className="text-[var(--success)]">Receive a tailored proposal for ongoing work</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-[var(--success)] mx-auto mb-4" />
                <p className="text-[var(--font-size-lg)] font-semibold text-[var(--success)] mb-4">
                  No commitment required - just valuable insights you can use immediately.
                </p>
                <Button variant="secondary" size="lg" className="bg-[var(--success)] text-white hover:bg-[var(--success-dark)]">
                  Book Discovery Session
                </Button>
              </div>
            </div>
          </div>

          {/* Consultation Options */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)] mb-4">
                Project-Based Consultation
              </h3>
              <p className="text-[var(--font-size-2xl)] font-bold text-[var(--primary-500)] mb-4">
                £200/hour
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">No minimum commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">Perfect for specific challenges or one-off projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">Flexible scheduling around your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">Expert guidance when you need it most</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)] mb-4">
                Partnership Rate
              </h3>
              <p className="text-[var(--font-size-2xl)] font-bold text-[var(--primary-500)] mb-4">
                £150/hour
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">Minimum 20-hour upfront commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">Ideal for ongoing projects requiring regular support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">Reduced rate for committed partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)]">Priority scheduling and response times</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--primary-500)] rounded-[var(--radius-xl)] p-8 border-2 border-[var(--primary-400)]">
              <h3 className="text-[var(--font-size-xl)] font-bold text-white mb-4">
                Monthly Support Package
              </h3>
              <p className="text-[var(--font-size-2xl)] font-bold text-white mb-4">
                £2,995/month
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">Up to 20 hours of consultation per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">Unused hours carry over for up to 3 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">Lowest hourly rate (£125/hour effective)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">Perfect for teams implementing long-term accessibility improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">Includes priority email support between sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Glooper */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              Why Choose Glooper?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="grid gap-8">
              <div className="flex gap-4">
                <Brain className="w-8 h-8 text-[var(--primary-500)] flex-shrink-0" />
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-2">
                    Lived Experience
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Our approach is informed by actual neurodivergent experience, not just research. We understand these challenges because we live them daily.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Award className="w-8 h-8 text-[var(--primary-500)] flex-shrink-0" />
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-2">
                    Proven Methodology
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Based on scientific studies, real-world testing with neurodivergent users, and decades of experience simplifying complex technical problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="w-8 h-8 text-[var(--primary-500)] flex-shrink-0" />
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-2">
                    Business-Focused
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    We understand that accessibility improvements must deliver measurable business value. Our recommendations balance user needs with practical implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="flex gap-4">
                <MessageCircle className="w-8 h-8 text-[var(--primary-500)] flex-shrink-0" />
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    No jargon, no overwhelming technical specifications. Clear, practical guidance that non-technical teams can understand and implement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Target className="w-8 h-8 text-[var(--primary-500)] flex-shrink-0" />
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-2">
                    Results-Driven
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Every recommendation comes with expected outcomes and success metrics. We&apos;re committed to delivering improvements you can measure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-[var(--primary-500)] flex-shrink-0" />
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-2">
                    Our Guarantee
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    We&apos;re confident in the value we provide. If you don&apos;t find actionable improvements in our analysis or consultation, we&apos;ll refund your payment. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              Industries We Serve
            </h2>
            <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] mb-8">
              Every business benefits from neurodivergent-friendly design:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
              <Heart className="w-8 h-8 text-[var(--primary-500)] mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Healthcare & Care Services</h3>
              <p className="text-[var(--text-secondary)]">Make critical information accessible to all patients and families</p>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
              <Brain className="w-8 h-8 text-[var(--primary-500)] mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Education</h3>
              <p className="text-[var(--text-secondary)]">Ensure learning platforms work for students with different cognitive needs</p>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
              <Shield className="w-8 h-8 text-[var(--primary-500)] mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Financial Services</h3>
              <p className="text-[var(--text-secondary)]">Simplify complex processes for better customer outcomes</p>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
              <TrendingUp className="w-8 h-8 text-[var(--primary-500)] mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">E-commerce</h3>
              <p className="text-[var(--text-secondary)]">Reduce cart abandonment and increase conversion rates</p>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
              <Zap className="w-8 h-8 text-[var(--primary-500)] mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Technology</h3>
              <p className="text-[var(--text-secondary)]">Create products that truly serve diverse users</p>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
              <Users className="w-8 h-8 text-[var(--primary-500)] mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Professional Services</h3>
              <p className="text-[var(--text-secondary)]">Make your expertise accessible to all potential clients</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-[var(--primary-50)] rounded-[var(--radius-lg)] p-6 inline-block">
              <p className="text-[var(--font-size-lg)] font-semibold text-[var(--primary-700)]">
                If your business serves people, 20% of those people are neurodivergent. We help you serve them better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-[var(--primary-500)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-[var(--font-size-3xl)] font-bold text-white mb-4">
            Getting Started
          </h2>
          <p className="text-[var(--font-size-lg)] text-blue-100 mb-8">
            Ready to make your digital presence more welcoming to 20% of your potential customers?
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Button variant="secondary" size="lg" className="bg-white text-[var(--primary-500)] hover:bg-gray-50" asChild>
              <a href="/tools/website-analysis">
                Get Free Website Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-[var(--primary-500)] hover:bg-gray-50" asChild>
              <a href="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-[var(--primary-500)] hover:bg-gray-50" asChild>
              <a href="/contact">
                Tool Development Questionnaire
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}