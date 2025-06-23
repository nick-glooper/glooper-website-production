import { Button } from '@/components/ui/Button';
import { ThemeControls } from '@/components/ui/ThemeControls';
import { 
  Brain, 
  Timer, 
  ListChecks, 
  Palette, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Target,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'Glooper - Neurodivergent-Friendly Website Design & Accessibility',
  description: 'Get an instant AI-powered analysis of how neurodivergent-friendly your website is. 1 in 5 visitors struggle with standard designs - find out how to serve them better.',
  keywords: ['neurodivergent design', 'ADHD accessibility', 'autism website design', 'cognitive accessibility', 'inclusive design', 'website accessibility audit'],
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-[var(--font-size-4xl)] lg:text-[var(--font-size-5xl)] font-bold text-[var(--text-primary)] tracking-tight mb-6">
              1 in 5 visitors find your website{' '}
              <span className="text-[var(--primary-500)]">overwhelming</span>
            </h1>
            
            <p className="text-[var(--font-size-lg)] lg:text-[var(--font-size-xl)] text-[var(--text-secondary)] mb-8 leading-relaxed max-w-3xl mx-auto">
              You&apos;re making it difficult for 20% of your customers to do business with you. 
              Find out how accessible your website really is.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/tools/website-analysis">
                  Get Instant Website Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="/services">
                  Explore Our Services
                </a>
              </Button>
            </div>
            
            <p className="text-[var(--text-secondary)] mt-4 text-sm">
              Free • 2 minutes • AI-powered
            </p>
          </div>
        </div>
      </section>

      {/* Free Tools Preview */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[var(--font-size-3xl)] lg:text-[var(--font-size-4xl)] font-bold text-[var(--text-primary)] mb-4">
              Try Our Approach Risk-Free
            </h2>
            <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] max-w-2xl mx-auto">
              Experience our neurodivergent-friendly design philosophy firsthand. These free tools 
              demonstrate accessibility features that work for everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pomodoro Timer Preview */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Timer className="w-8 h-8 text-[var(--primary-500)]" />
                <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)]">
                  Adaptive Pomodoro Timer
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] mb-6">
                ADHD-friendly timing with hyperfocus accommodation and gentle transitions. 
                No shame, just support.
              </p>
              <Button variant="secondary" fullWidth asChild>
                <a href="/tools#pomodoro">
                  Try Timer →
                </a>
              </Button>
            </div>

            {/* Task Breakdown Helper Preview */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <ListChecks className="w-8 h-8 text-[var(--primary-500)]" />
                <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)]">
                  Task Breakdown Helper
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] mb-6">
                Turn overwhelming tasks into manageable steps with energy-level awareness 
                and smart chunking.
              </p>
              <Button variant="secondary" fullWidth asChild>
                <a href="/tools#task-breakdown">
                  Break Down Task →
                </a>
              </Button>
            </div>

            {/* Theme Demonstrator Preview */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-8 h-8 text-[var(--primary-500)]" />
                <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)]">
                  Design System Demo
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] mb-6">
                Live demonstration of all theme combinations, accessibility features, 
                and neurodivergent-friendly design principles.
              </p>
              <Button variant="secondary" fullWidth asChild>
                <a href="/tools#theme-demo">
                  Explore Themes →
                </a>
              </Button>
            </div>
          </div>

          {/* Embedded Theme Demo */}
          <div className="mt-16">
            <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-2xl)] p-8">
              <h3 className="text-[var(--font-size-2xl)] font-semibold text-[var(--text-primary)] mb-6 text-center">
                Try Our Design System Live
              </h3>
              <ThemeControls />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[var(--font-size-3xl)] lg:text-[var(--font-size-4xl)] font-bold text-[var(--text-primary)] mb-4">
              Professional Services
            </h2>
            <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] max-w-2xl mx-auto">
              Making digital experiences accessible for neurodivergent users through expert consultation, 
              comprehensive audits, and custom tool development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Website Accessibility Audit */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-2">
                Website Accessibility Audit
              </h3>
              <p className="text-[var(--primary-500)] font-medium mb-4">£495</p>
              <p className="text-[var(--text-secondary)] mb-6">
                Complete analysis against 47 neurodivergent accessibility criteria with prioritized 
                action plan and business impact assessment.
              </p>
              <Button variant="secondary" asChild>
                <a href="/services#audit">
                  Get Complete Report
                </a>
              </Button>
            </div>

            {/* Design Consultation */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-2">
                Design Consultation
              </h3>
              <p className="text-[var(--primary-500)] font-medium mb-4">Free Discovery Session</p>
              <p className="text-[var(--text-secondary)] mb-6">
                Start with a comprehensive 1-hour discussion about your challenges. 
                Ongoing consultation from £150-£200/hour.
              </p>
              <Button variant="secondary" asChild>
                <a href="/contact">
                  Book Free Session
                </a>
              </Button>
            </div>

            {/* Tool Development */}
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-2">
                Simple Tool Development
              </h3>
              <p className="text-[var(--primary-500)] font-medium mb-4">£1,950 - £5,950</p>
              <p className="text-[var(--text-secondary)] mb-6">
                Custom single-purpose digital tools designed for neurodivergent users. 
                Proof of concept to full development.
              </p>
              <Button variant="secondary" asChild>
                <a href="/services#tools">
                  Explore Development
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              Trusted Expertise You Can Rely On
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Neurodivergent Expertise */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-[var(--primary-500)]" />
              </div>
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-4">
                Neurodivergent Expertise
              </h3>
              <p className="text-[var(--text-secondary)]">
                Designed by someone with ADHD and ASD who understands the challenges firsthand
              </p>
            </div>

            {/* Research-Based */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[var(--primary-500)]" />
              </div>
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-4">
                Research-Based
              </h3>
              <p className="text-[var(--text-secondary)]">
                Analysis based on scientific studies and proven design principles for cognitive accessibility
              </p>
            </div>

            {/* Actionable Results */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[var(--primary-500)]" />
              </div>
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)] mb-4">
                Actionable Results
              </h3>
              <p className="text-[var(--text-secondary)]">
                Get specific, prioritized recommendations you can implement immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistic Section */}
      <section className="py-16 bg-[var(--warning-light)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="bg-white/80 rounded-[var(--radius-2xl)] p-8 border border-[var(--warning)]">
            <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--warning)] mb-4">
              1 in 5 people are neurodivergent
            </h2>
            <p className="text-[var(--font-size-xl)] text-[var(--warning)] font-medium mb-6">
              That&apos;s 20% of your customers struggling to interact with your digital presence.
            </p>
            <p className="text-[var(--font-size-lg)] text-[var(--warning)]">
              We&apos;re here to help you change that.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary-500)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-[var(--font-size-3xl)] lg:text-[var(--font-size-4xl)] font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-[var(--font-size-lg)] text-blue-100 mb-8">
            Let&apos;s make your digital presence more accessible for neurodivergent users. 
            Start with a free discovery session or instant website analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-[var(--primary-500)] hover:bg-gray-50" asChild>
              <a href="/contact">
                Book Free Consultation
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <a href="/tools/website-analysis">
                Get Website Analysis
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}