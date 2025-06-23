import { GlooperLogo } from '@/components/ui/GlooperLogo';
import { 
  Shield, 
  Eye, 
  Lock, 
  UserCheck, 
  Globe, 
  FileText,
  Clock,
  Mail
} from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Glooper',
  description: 'Our commitment to your privacy. Learn how Glooper handles your personal information with transparency and minimal data collection.',
  keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'personal information', 'data security'],
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-[var(--font-size-lg)] lg:text-[var(--font-size-xl)] text-[var(--text-secondary)] leading-relaxed">
              Our commitment to your privacy and how we handle your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Details */}
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

          {/* Our Commitment */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-6">
              Our Commitment to Your Privacy
            </h2>
            <div className="bg-[var(--primary-50)] rounded-[var(--radius-lg)] p-6 border-l-4 border-[var(--primary-500)] mb-8">
              <p className="text-[var(--primary-700)] leading-relaxed">
                At Glooper, privacy isn&apos;t an afterthought—it&apos;s fundamental to everything we do. As a company focused on neurodivergent accessibility, we understand that trust and transparency are essential. We collect only the information we absolutely need to provide our services, and we&apos;re completely transparent about how we use it.
              </p>
            </div>
          </div>

          {/* What Information We Collect */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              What Information We Collect
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-4">
                  Information You Provide Directly
                </h3>
                <div className="space-y-4">
                  <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">Contact Forms and Consultation Requests:</h4>
                    <ul className="space-y-2 text-[var(--text-secondary)]">
                      <li>• Name and email address</li>
                      <li>• Organization name (optional)</li>
                      <li>• Project description and requirements</li>
                      <li>• Communication preferences</li>
                    </ul>
                  </div>

                  <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">Website Analysis Requests:</h4>
                    <ul className="space-y-2 text-[var(--text-secondary)]">
                      <li>• Website URL for analysis</li>
                      <li>• Contact information for results delivery</li>
                      <li>• Optional feedback about your specific concerns</li>
                    </ul>
                  </div>

                  <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">Service Consultations:</h4>
                    <ul className="space-y-2 text-[var(--text-secondary)]">
                      <li>• Information about your business and digital presence</li>
                      <li>• Specific accessibility challenges you&apos;re facing</li>
                      <li>• Goals and requirements for your project</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-4">
                  Information We Collect Automatically
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">Basic Website Analytics:</h4>
                    <ul className="space-y-2 text-[var(--text-secondary)]">
                      <li>• Pages visited and time spent</li>
                      <li>• General location (country/region only)</li>
                      <li>• Device and browser type</li>
                      <li>• How you found our website</li>
                    </ul>
                  </div>

                  <div className="bg-[var(--error-light)] rounded-[var(--radius-lg)] p-6 border border-[var(--error)]">
                    <h4 className="font-semibold text-[var(--error)] mb-3">We Do NOT Collect:</h4>
                    <ul className="space-y-2 text-[var(--error)]">
                      <li>• Detailed browsing behavior across other websites</li>
                      <li>• Personal identifiers beyond what you provide</li>
                      <li>• Sensitive personal information</li>
                      <li>• Information from cookies or tracking pixels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              How We Use Your Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--success-light)] rounded-[var(--radius-lg)] p-6 border border-[var(--success)]">
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--success)] mb-4">
                  Primary Uses
                </h3>
                <ul className="space-y-3 text-[var(--success)]">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Service Delivery:</span>
                    <span>Providing the accessibility audits, consultations, and development services you request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Communication:</span>
                    <span>Responding to your inquiries and providing updates about your projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Service Improvement:</span>
                    <span>Understanding how our website and services are used to make them more accessible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--error-light)] rounded-[var(--radius-lg)] p-6 border border-[var(--error)]">
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--error)] mb-4">
                  We Will Never
                </h3>
                <ul className="space-y-2 text-[var(--error)]">
                  <li>• Sell your information to third parties</li>
                  <li>• Use your information for advertising purposes</li>
                  <li>• Share your details with marketing companies</li>
                  <li>• Send you unsolicited promotional emails</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              Data Security
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--primary-500)]" />
                  Protection Measures
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Encryption:</p>
                      <p className="text-[var(--text-secondary)]">All data transmission is encrypted using industry-standard SSL/TLS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Secure Storage:</p>
                      <p className="text-[var(--text-secondary)]">Information is stored on secure servers with restricted access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-4 h-4 text-[var(--success)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Access Controls:</p>
                      <p className="text-[var(--text-secondary)]">Only authorized personnel can access your information</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                  Your Responsibilities
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>• Use strong, unique passwords for any accounts</li>
                  <li>• Keep your login information confidential</li>
                  <li>• Report any suspected security issues immediately</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              Your Rights and Choices
            </h2>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-8 border border-[var(--border-primary)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[var(--primary-500)]" />
                    Access and Control
                  </h3>
                  <ul className="space-y-3 text-[var(--text-secondary)]">
                    <li><strong>View Your Data:</strong> Request a copy of all information we have about you</li>
                    <li><strong>Correct Information:</strong> Update or correct any inaccurate information</li>
                    <li><strong>Delete Your Data:</strong> Request deletion of your information (subject to legal and business requirements)</li>
                    <li><strong>Limit Use:</strong> Opt out of non-essential communications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                    Communication Preferences
                  </h3>
                  <ul className="space-y-3 text-[var(--text-secondary)]">
                    <li><strong>Email Updates:</strong> You can unsubscribe from our updates at any time</li>
                    <li><strong>Service Communications:</strong> We&apos;ll only send essential communications about services you&apos;ve requested</li>
                    <li><strong>Marketing:</strong> We don&apos;t send promotional emails unless you specifically opt in</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              Data Retention
            </h2>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)] mb-6">
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                How Long We Keep Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li><strong>Contact Inquiries:</strong> 2 years after last contact</li>
                  <li><strong>Project Files:</strong> 3 years after project completion for potential follow-up support</li>
                </ul>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li><strong>Analytics Data:</strong> Aggregated data only, retained for business analysis</li>
                  <li><strong>Legal Requirements:</strong> Some information may be retained longer if required by law</li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--success-light)] rounded-[var(--radius-lg)] p-4 border border-[var(--success)]">
              <p className="text-[var(--success)]">
                <strong>Automatic Deletion:</strong> We automatically delete old information according to our retention schedule. You can request earlier deletion at any time.
              </p>
            </div>
          </div>

          {/* International Users */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-[var(--primary-500)]" />
              International Users
            </h2>

            <div className="space-y-6">
              <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-primary)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-3">UK-Based Service</h3>
                <p className="text-[var(--text-secondary)]">
                  Glooper is based in the United Kingdom and operates under UK data protection laws. If you&apos;re located outside the UK, your information will be transferred to and processed in the UK.
                </p>
              </div>

              <div className="bg-[var(--primary-50)] rounded-[var(--radius-lg)] p-6 border border-[var(--primary-500)]">
                <h3 className="font-semibold text-[var(--primary-700)] mb-3">GDPR Compliance</h3>
                <p className="text-[var(--primary-600)]">
                  For users in the European Union, we comply with the General Data Protection Regulation (GDPR) and respect all your rights under this regulation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-6">
              Contact Us
            </h2>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-lg)] p-8 border border-[var(--border-primary)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
                    Questions or Concerns
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    If you have any questions about this privacy policy or how we handle your information:
                  </p>
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
                    Data Protection Requests
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    For requests to access, correct, or delete your personal information, please email info@glooper.ai with &ldquo;Data Request&rdquo; in the subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Promise */}
          <div className="bg-[var(--primary-500)] rounded-[var(--radius-2xl)] p-8 text-center">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-white mb-6">
              Our Promise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-white">
              <div>
                <strong>Transparency:</strong> We&apos;ll always be clear about what information we collect and why
              </div>
              <div>
                <strong>Minimalism:</strong> We collect only what we need to provide our services
              </div>
              <div>
                <strong>Security:</strong> Your information is protected with industry-standard security measures
              </div>
              <div>
                <strong>Respect:</strong> Your privacy choices will always be honored
              </div>
              <div>
                <strong>Accessibility:</strong> This policy and our practices are designed to be clear and understandable
              </div>
            </div>
            <p className="text-blue-100 mt-6 italic">
              Privacy and accessibility go hand in hand. Just as we design digital experiences that work for everyone, we handle your personal information with the care and respect everyone deserves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}