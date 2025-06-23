import { GlooperLogo } from '@/components/ui/GlooperLogo';
import { 
  FileText, 
  Clock, 
  Mail,
  CreditCard,
  Users,
  Handshake,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - Glooper',
  description: 'Clear, accessible terms of service for Glooper\'s neurodivergent accessibility consulting services. No legal jargon, just fair terms in plain English.',
  keywords: ['terms of service', 'service agreement', 'legal terms', 'accessibility consulting', 'business terms'],
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-[var(--font-size-lg)] lg:text-[var(--font-size-xl)] text-[var(--text-secondary)] leading-relaxed">
              Clear, accessible terms for our neurodivergent accessibility consulting services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Effective Date */}
          <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)] mb-12">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-[var(--primary-500)]" />
              <p className="font-semibold text-[var(--text-primary)]">Effective Date: December 2024</p>
            </div>
            <p className="text-[var(--text-secondary)]">Last Updated: December 2024</p>
          </div>

          {/* Our Agreement */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-6">
              Our Agreement
            </h2>
            <div className="bg-[var(--primary-50)] rounded-[var(--radius-lg)] p-6 border-l-4 border-[var(--primary-500)]">
              <p className="text-[var(--primary-700)] leading-relaxed">
                These Terms of Service govern your use of Glooper&apos;s website and services. By using our services or website, you agree to these terms. We&apos;ve written them in plain English to make them as clear and accessible as possible.
              </p>
            </div>
          </div>

          {/* About Glooper */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              About Glooper
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">Business Details:</h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li><strong>Company:</strong> Glooper</li>
                  <li><strong>Address:</strong> The Dairy, Seale Lane, Puttenham, Guildford, Surrey GU10 1HL</li>
                  <li><strong>Contact:</strong> info@glooper.ai</li>
                  <li><strong>Website:</strong> glooper.ai</li>
                </ul>
              </div>

              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">What We Do:</h3>
                <p className="text-[var(--text-secondary)]">
                  We provide digital accessibility consulting, website analysis, and tool development services specifically focused on neurodivergent-friendly design.
                </p>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              Our Services
            </h2>

            <div className="space-y-8">
              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                  Website Accessibility Audits (£495)
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>• Comprehensive analysis of your website&apos;s neurodivergent accessibility</li>
                  <li>• Detailed report with specific recommendations</li>
                  <li>• Business impact analysis and implementation guidance</li>
                </ul>
              </div>

              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                  Design Consultation
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>• Hourly consultation at £200 (project-based), £150 (20+ hour commitment), or £125 (monthly package)</li>
                  <li>• Free initial consultation (1 hour)</li>
                  <li>• Expert guidance on neurodivergent-friendly design</li>
                </ul>
              </div>

              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                  Tool Development
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>• Custom digital tool development with proof-of-concept pricing at £1,950, £3,950, or £5,950</li>
                  <li>• Questionnaire-driven design process</li>
                  <li>• Working prototypes with development proposals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-[var(--primary-500)]" />
              Payment Terms
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-3">Accessibility Audits:</h3>
                  <ul className="space-y-1 text-[var(--text-secondary)]">
                    <li>• Payment required upfront before analysis begins</li>
                    <li>• £995 discount on subsequent projects over £4,950</li>
                  </ul>
                </div>

                <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-3">Consultation Services:</h3>
                  <ul className="space-y-1 text-[var(--text-secondary)]">
                    <li>• Project-based: Payment due within 7 days of invoice</li>
                    <li>• Committed hours: 50% upfront, remainder within 30 days</li>
                    <li>• Monthly packages: Payment due monthly in advance</li>
                  </ul>
                </div>

                <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-3">Tool Development:</h3>
                  <ul className="space-y-1 text-[var(--text-secondary)]">
                    <li>• 50% deposit required to begin work</li>
                    <li>• Remainder due upon delivery of proof of concept</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[var(--success-light)] rounded-[var(--radius-lg)] p-6 border border-[var(--success)]">
                  <h3 className="font-semibold text-[var(--success)] mb-3">Payment Methods:</h3>
                  <ul className="space-y-1 text-[var(--success)]">
                    <li>• Bank transfer (preferred)</li>
                    <li>• Credit/debit card via secure payment processor</li>
                    <li>• PayPal for international clients</li>
                  </ul>
                </div>

                <div className="bg-[var(--warning-light)] rounded-[var(--radius-lg)] p-6 border border-[var(--warning)]">
                  <h3 className="font-semibold text-[var(--warning)] mb-3">Late Payment:</h3>
                  <ul className="space-y-1 text-[var(--warning)]">
                    <li>• 1.5% monthly charge on overdue amounts</li>
                    <li>• Services may be suspended for accounts more than 30 days overdue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-[var(--primary-500)]" />
              Responsibilities
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                  Your Responsibilities
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-2">Information Accuracy:</h4>
                    <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                      <li>• Provide accurate information about your project requirements</li>
                      <li>• Respond to our questions and requests for clarification in a timely manner</li>
                      <li>• Review deliverables promptly and provide feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-2">Access and Cooperation:</h4>
                    <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                      <li>• Provide necessary access to websites, systems, or information required for our services</li>
                      <li>• Ensure you have authority to engage our services for your organization</li>
                      <li>• Maintain confidentiality of any login credentials we provide</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                  Our Responsibilities
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-2">Service Quality:</h4>
                    <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                      <li>• Deliver services with professional competence and care</li>
                      <li>• Meet agreed-upon timelines unless circumstances beyond our control intervene</li>
                      <li>• Provide clear, actionable recommendations based on current best practices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-2">Communication:</h4>
                    <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                      <li>• Respond to your emails within 48 hours during business days</li>
                      <li>• Provide clear project updates and milestone communications</li>
                      <li>• Be transparent about any challenges or delays</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[var(--primary-500)]" />
              Intellectual Property
            </h2>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-[var(--success-light)] rounded-[var(--radius-lg)] p-6 border border-[var(--success)]">
                <h3 className="font-semibold text-[var(--success)] mb-3">Your Content</h3>
                <ul className="space-y-2 text-[var(--success)] text-sm">
                  <li>• You retain ownership of all content, websites, and materials you provide</li>
                  <li>• You grant us permission to access and analyze your materials solely for service delivery</li>
                  <li>• We will not use your content for any other purpose without explicit permission</li>
                </ul>
              </div>

              <div className="bg-[var(--primary-50)] rounded-[var(--radius-lg)] p-6 border border-[var(--primary-500)]">
                <h3 className="font-semibold text-[var(--primary-700)] mb-3">Our Work Product</h3>
                <ul className="space-y-2 text-[var(--primary-600)] text-sm">
                  <li>• Reports, recommendations, and analysis we create remain your property after full payment</li>
                  <li>• We retain the right to use general insights and methodologies for future work</li>
                  <li>• Any custom code or tools developed for you become your property upon full payment</li>
                </ul>
              </div>

              <div className="bg-[var(--warning-light)] rounded-[var(--radius-lg)] p-6 border border-[var(--warning)]">
                <h3 className="font-semibold text-[var(--warning)] mb-3">General Methodologies</h3>
                <ul className="space-y-2 text-[var(--warning)] text-sm">
                  <li>• Our general accessibility frameworks and methodologies remain our intellectual property</li>
                  <li>• You may not resell or redistribute our methodologies as a standalone product</li>
                  <li>• You may implement our recommendations within your own organization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-[var(--primary-500)]" />
              Limitations and Disclaimers
            </h2>

            <div className="space-y-6">
              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-3">Service Scope</h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>• Our recommendations are based on current best practices and available information</li>
                  <li>• We cannot guarantee specific business outcomes or conversion improvements</li>
                  <li>• Legal compliance requirements may vary by jurisdiction and should be verified independently</li>
                </ul>
              </div>

              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-3">Technical Limitations</h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>• Website analysis is based on publicly accessible pages and information you provide</li>
                  <li>• Some technical limitations may prevent comprehensive analysis of certain systems</li>
                  <li>• Third-party integrations or complex systems may require additional specialized expertise</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guarantee and Refunds */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[var(--primary-500)]" />
              Our Guarantee
            </h2>

            <div className="bg-[var(--success-light)] rounded-[var(--radius-xl)] p-8 border-l-4 border-[var(--success)] mb-8">
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--success)] mb-4">
                We&apos;re confident in the value we provide
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-[var(--success)] mb-2">Accessibility Audits:</h4>
                  <p className="text-[var(--success)] text-sm">If you&apos;re not satisfied with our accessibility audit, we&apos;ll refund your payment</p>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--success)] mb-2">Consultation Services:</h4>
                  <p className="text-[var(--success)] text-sm">Full refund if you&apos;re not satisfied with your free initial session</p>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--success)] mb-2">Tool Development:</h4>
                  <p className="text-[var(--success)] text-sm">Refund available if proof of concept doesn&apos;t meet agreed specifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              Contact Information
            </h2>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-8 border border-[var(--border-primary)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                    Questions or Concerns
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[var(--primary-500)]" />
                      <span className="text-[var(--text-primary)]">Email: info@glooper.ai</span>
                    </div>
                    <div className="text-[var(--text-secondary)]">
                      <strong>Address:</strong> Glooper, The Dairy, Seale Lane, Puttenham, Guildford, Surrey GU10 1HL
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                    Service Requests
                  </h3>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li>• Initial consultations: Book via our website contact form</li>
                    <li>• Service inquiries: Email with &ldquo;Service Request&rdquo; in subject line</li>
                    <li>• Technical support: Email with &ldquo;Support&rdquo; in subject line</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-[var(--primary-500)] rounded-[var(--radius-2xl)] p-8 text-center">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Handshake className="w-8 h-8" />
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white mb-6">
              <div>
                <strong>Clarity:</strong> These terms are written to be understood, not to confuse
              </div>
              <div>
                <strong>Fairness:</strong> Our terms protect both parties while enabling great work
              </div>
              <div>
                <strong>Accessibility:</strong> Just like our services, our terms are designed to be accessible to everyone
              </div>
              <div>
                <strong>Respect:</strong> We believe in treating clients with respect and expect the same in return
              </div>
            </div>
            <p className="text-blue-100 italic">
              Good business relationships start with clear expectations. These terms ensure we can focus on what matters most: making digital experiences accessible for neurodivergent users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}