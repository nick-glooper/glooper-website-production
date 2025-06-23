import { PomodoroTimer } from '@/components/tools/PomodoroTimer';
import { TaskBreakdownHelper } from '@/components/tools/TaskBreakdownHelper';
import { ThemeDemonstrator } from '@/components/tools/ThemeDemonstrator';
import { Button } from '@/components/ui/Button';
import { 
  Timer, 
  ListChecks, 
  Palette, 
  ArrowRight, 
  Heart,
  Lightbulb,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'Free Tools - Neurodivergent-Friendly Design Examples | Glooper',
  description: 'Try our free ADHD-friendly tools: Adaptive Pomodoro Timer, Task Breakdown Helper, and Theme Demonstrator. Experience neurodivergent design principles in action.',
  keywords: ['ADHD tools', 'neurodivergent design', 'free productivity tools', 'accessible design', 'cognitive accessibility'],
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-[var(--font-size-4xl)] lg:text-[var(--font-size-5xl)] font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Free Tools for{' '}
              <span className="text-[var(--primary-500)]">Neurodivergent Minds</span>
            </h1>
            
            <p className="text-[var(--font-size-lg)] lg:text-[var(--font-size-xl)] text-[var(--text-secondary)] mb-8 leading-relaxed max-w-3xl mx-auto">
              Experience neurodivergent-friendly design in action. These tools demonstrate our approach 
              to reducing cognitive load, supporting executive function, and creating genuinely helpful interfaces.
            </p>
            
            <div className="flex items-center justify-center gap-3 text-[var(--text-secondary)]">
              <Heart className="w-5 h-5 text-[var(--primary-500)]" />
              <span>No sign-up required • No data collection • Always free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Tool 1: Adaptive Pomodoro Timer */}
          <div className="mb-20" id="pomodoro">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Timer className="w-8 h-8 text-[var(--primary-500)]" />
                <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)]">
                  Adaptive Pomodoro Timer
                </h2>
              </div>
              <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] max-w-2xl mx-auto">
                ADHD-friendly timing with hyperfocus accommodation, gentle transitions, 
                and encouraging language. No shame, just support.
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              <PomodoroTimer />
            </div>

            <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-xl)] p-6 max-w-4xl mx-auto">
              <h3 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[var(--primary-500)]" />
                What Makes This ADHD-Friendly
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-[var(--font-size-sm)] text-[var(--text-secondary)]">
                <ul className="space-y-2">
                  <li>• <strong>Hyperfocus accommodation:</strong> Extend sessions when you're in the zone</li>
                  <li>• <strong>Gentle transitions:</strong> 30-second warning before sessions end</li>
                  <li>• <strong>No shame language:</strong> &ldquo;Resume when ready&rdquo; not &ldquo;You&apos;re late!&rdquo;</li>
                </ul>
                <ul className="space-y-2">
                  <li>• <strong>Flexible timing:</strong> Customize work and break durations</li>
                  <li>• <strong>Visual progress:</strong> See your accomplishments build up</li>
                  <li>• <strong>Encouraging messages:</strong> Positive reinforcement, not pressure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 2: Task Breakdown Helper */}
          <div className="mb-20" id="task-breakdown">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <ListChecks className="w-8 h-8 text-[var(--primary-500)]" />
                <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)]">
                  Task Breakdown Helper
                </h2>
              </div>
              <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] max-w-2xl mx-auto">
                Turn overwhelming tasks into manageable steps with energy-level awareness, 
                smart templates, and executive function support.
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              <TaskBreakdownHelper />
            </div>

            <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-xl)] p-6 max-w-4xl mx-auto">
              <h3 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[var(--primary-500)]" />
                Executive Function Support Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-[var(--font-size-sm)] text-[var(--text-secondary)]">
                <ul className="space-y-2">
                  <li>• <strong>Energy matching:</strong> Match tasks to your current energy level</li>
                  <li>• <strong>Smart templates:</strong> Pre-built breakdowns for common tasks</li>
                  <li>• <strong>15-30 minute chunks:</strong> Prevents overwhelm and fatigue</li>
                </ul>
                <ul className="space-y-2">
                  <li>• <strong>Progress celebration:</strong> Built-in moments of accomplishment</li>
                  <li>• <strong>Flexible editing:</strong> Adapt steps as you learn what works</li>
                  <li>• <strong>Context preservation:</strong> Save and return to tasks later</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 3: Theme Demonstrator */}
          <div className="mb-20" id="theme-demo">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Palette className="w-8 h-8 text-[var(--primary-500)]" />
                <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)]">
                  Interactive Design System Demo
                </h2>
              </div>
              <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] max-w-2xl mx-auto">
                Explore our complete neurodivergent-friendly design system. See how every component 
                adapts to support different cognitive needs and accessibility requirements.
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              <ThemeDemonstrator />
            </div>

            <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-xl)] p-6 max-w-4xl mx-auto">
              <h3 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[var(--primary-500)]" />
                Complete Accessibility Framework
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-[var(--font-size-sm)] text-[var(--text-secondary)]">
                <ul className="space-y-2">
                  <li>• <strong>6 theme combinations:</strong> 3 color schemes × light/dark modes</li>
                  <li>• <strong>4 font size scales:</strong> From compact to extra large</li>
                  <li>• <strong>3 font families:</strong> Reading-optimized, familiar, and accessible</li>
                </ul>
                <ul className="space-y-2">
                  <li>• <strong>WCAG AAA compliance:</strong> 7:1 contrast ratios minimum</li>
                  <li>• <strong>Real-time adaptation:</strong> All components update instantly</li>
                  <li>• <strong>Persistent preferences:</strong> Your choices are remembered</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How These Tools Demonstrate Our Expertise */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              Why These Tools Matter
            </h2>
            <p className="text-[var(--font-size-lg)] text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each tool demonstrates key principles of neurodivergent-friendly design 
              that we apply to all our client projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-6 text-center">
              <Timer className="w-12 h-12 text-[var(--primary-500)] mx-auto mb-4" />
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-3">
                ADHD Accommodation
              </h3>
              <p className="text-[var(--text-secondary)]">
                The Pomodoro Timer shows how to support hyperfocus, provide gentle transitions, 
                and use encouraging rather than shaming language.
              </p>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-6 text-center">
              <ListChecks className="w-12 h-12 text-[var(--primary-500)] mx-auto mb-4" />
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-3">
                Executive Function Support
              </h3>
              <p className="text-[var(--text-secondary)]">
                The Task Breakdown Helper demonstrates intelligent task chunking, 
                energy awareness, and reducing decision fatigue.
              </p>
            </div>

            <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-6 text-center">
              <Palette className="w-12 h-12 text-[var(--primary-500)] mx-auto mb-4" />
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-3">
                Comprehensive Accessibility
              </h3>
              <p className="text-[var(--text-secondary)]">
                The Theme Demonstrator shows our complete design system with 
                real-time customization and WCAG AAA compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary-500)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-white" />
            <h2 className="text-[var(--font-size-3xl)] font-bold text-white">
              Want This for Your Product?
            </h2>
          </div>
          
          <p className="text-[var(--font-size-lg)] text-blue-100 mb-8">
            These tools demonstrate our approach in miniature. Imagine what we could do 
            for your entire product with a complete neurodivergent-friendly redesign.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[var(--primary-500)] hover:bg-gray-50"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white border-white hover:bg-white/10"
            >
              View Our Services
            </Button>
          </div>
          
          <p className="text-[var(--font-size-sm)] text-blue-200 mt-6">
            30-minute discovery call • No commitment • Immediate insights
          </p>
        </div>
      </section>
    </div>
  );
}