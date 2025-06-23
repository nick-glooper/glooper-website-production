import { Button } from '@/components/ui/Button';
import { GlooperLogo } from '@/components/ui/GlooperLogo';
import { 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Globe
} from 'lucide-react';

export const metadata = {
  title: 'Contact Glooper - Get In Touch About Accessibility Services',
  description: 'Contact Glooper for neurodivergent accessibility consulting, website audits, and tool development. Free discovery sessions available.',
  keywords: ['contact glooper', 'accessibility consultation', 'neurodivergent design', 'website audit', 'free consultation'],
};

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-[var(--font-size-lg)] lg:text-[var(--font-size-xl)] text-[var(--text-secondary)] leading-relaxed">
              Ready to make your digital presence more accessible for neurodivergent users?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              How Can We Help You?
            </h2>
            <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)]">
              Choose the option that best fits your needs, or contact us directly
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Free Website Analysis */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)] text-center">
              <div className="w-16 h-16 bg-[var(--success-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[var(--success)]" />
              </div>
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-4">
                Free Website Analysis
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Get an instant AI-powered analysis of how neurodivergent-friendly your website is. Takes just 2 minutes.
              </p>
              <Button size="lg" fullWidth asChild>
                <a href="/tools/website-analysis">
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Free Discovery Session */}
            <div className="bg-[var(--primary-500)] rounded-[var(--radius-xl)] p-8 border-2 border-[var(--primary-400)] text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[var(--warning)] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[var(--font-size-xl)] font-semibold text-white mb-4">
                Free Discovery Session
              </h3>
              <p className="text-blue-100 mb-6">
                1-hour consultation to discuss your specific challenges and get tailored recommendations. No commitment required.
              </p>
              <Button variant="secondary" size="lg" fullWidth className="bg-white text-[var(--primary-500)] hover:bg-gray-50">
                Book Free Session
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Direct Contact */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)] text-center">
              <div className="w-16 h-16 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-[var(--primary-500)]" />
              </div>
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-4">
                Direct Contact
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Have specific questions or need to discuss a custom project? Send us a message directly.
              </p>
              <Button variant="secondary" size="lg" fullWidth>
                Send Message
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              Contact Information
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <h3 className="text-[var(--font-size-2xl)] font-semibold text-[var(--text-primary)] mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[var(--primary-500)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Email</h4>
                    <p className="text-[var(--text-secondary)]">info@glooper.ai</p>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">We respond within 48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[var(--primary-500)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Address</h4>
                    <div className="text-[var(--text-secondary)]">
                      <p>Glooper</p>
                      <p>The Dairy</p>
                      <p>Seale Lane</p>
                      <p>Puttenham</p>
                      <p>Guildford, Surrey GU10 1HL</p>
                      <p>United Kingdom</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-[var(--primary-500)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Website</h4>
                    <p className="text-[var(--text-secondary)]">glooper.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[var(--primary-500)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Response Time</h4>
                    <p className="text-[var(--text-secondary)]">Within 48 hours during business days</p>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">Monday - Friday, 9 AM - 5 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <h3 className="text-[var(--font-size-2xl)] font-semibold text-[var(--text-primary)] mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-[var(--border-primary)] rounded-[var(--radius-lg)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                    placeholder="How should we address you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-[var(--border-primary)] rounded-[var(--radius-lg)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                    placeholder="We'll send our response here"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-[var(--border-primary)] rounded-[var(--radius-lg)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                    placeholder="Company or organization name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    What can we help you with?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-[var(--border-primary)] rounded-[var(--radius-lg)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                  >
                    <option value="">Select a topic...</option>
                    <option value="accessibility-audit">Accessibility Audit</option>
                    <option value="design-consultation">Design Consultation</option>
                    <option value="tool-development">Tool Development</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-[var(--border-primary)] rounded-[var(--radius-lg)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent resize-none"
                    placeholder="The more details you provide, the better we can help"
                  />
                  <p className="text-sm text-[var(--text-tertiary)] mt-2">
                    Include details about your current challenges, goals, and timeline if applicable.
                  </p>
                </div>

                <Button size="lg" fullWidth type="submit">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              What to Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--primary-500)] font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Quick Response</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                We'll respond to your inquiry within 48 hours with next steps or answers to your questions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--primary-500)] font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Clear Communication</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                No jargon, no overwhelming technical details. We explain everything in plain English.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--primary-500)] font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Actionable Next Steps</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Whether it's a free consultation or detailed proposal, you'll know exactly what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary-500)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-[var(--font-size-3xl)] font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--font-size-lg)] text-blue-100 mb-8">
            20% of your customers are neurodivergent. Let&apos;s make your digital presence work better for them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-[var(--primary-500)] hover:bg-gray-50" asChild>
              <a href="/tools/website-analysis">
                Start Free Analysis
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <a href="/services">
                View All Services
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}