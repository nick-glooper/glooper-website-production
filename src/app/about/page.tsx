import { Button } from '@/components/ui/Button';
import { GlooperLogo } from '@/components/ui/GlooperLogo';
import { 
  Brain, 
  Target, 
  Lightbulb, 
  Users, 
  Heart,
  Quote,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'About Glooper - Neurodivergent Accessibility Expert',
  description: 'Meet the neurodivergent accessibility expert behind Glooper. Learn how lived experience with ADHD and ASD informs our approach to inclusive design.',
  keywords: ['neurodivergent designer', 'ADHD accessibility expert', 'autism design consultant', 'lived experience', 'inclusive design'],
};

export default function AboutPage() {
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
              About Glooper
            </h1>
            <p className="text-[var(--font-size-lg)] lg:text-[var(--font-size-xl)] text-[var(--text-secondary)] leading-relaxed">
              Making digital experiences accessible for neurodivergent users through lived experience and expert design.
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-[var(--surface-primary)] rounded-[var(--radius-2xl)] p-8 lg:p-12 border border-[var(--border-primary)]">
            <div className="flex items-start gap-4 mb-8">
              <Quote className="w-8 h-8 text-[var(--primary-500)] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
                  My Story
                </h2>
                <div className="prose max-w-none">
                  <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-6">
                    I was only recently diagnosed with ADHD and ASD at the age of 55, and it came after a series of mini breakdowns which I attribute to autistic burnout. I had been struggling with both work and my home life, which finally prompted me to seek help from my doctor. After listening to me, he asked me to fill out questionnaires for ADHD and ASD. Based on my responses, he immediately referred me to a specialist.
                  </p>
                  
                  <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-6">
                    I&apos;m now starting on my journey to understand and cope with the neurodivergent conditions I have. I still find it overwhelming at times, scary and worrying, but there&apos;s also a sense of relief that I understand better why I am the way I am. I know it&apos;s going to change things a lot for me, but I&apos;m interested and excited about the changes I need to make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              My Professional Background
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-8">
              Throughout my career, I&apos;ve worked as a project manager, bid manager, procurement manager, commercial manager, and contract manager for various organizations in both public and private sectors—always on large, complicated, high-value, high-impact technology programmes.
            </p>

            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-8">
              I&apos;ve always been interested in the underlying technology we used in delivering these programmes, and I found myself to be very good at communicating and explaining complex issues to management audiences who aren&apos;t interested in the technology itself but need to make informed decisions about strategies and plans.
            </p>

            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-8">
              I understood how technology fits together and learned the principles, approaches, and methodologies we use to deliver technology projects. I even tried to do development work myself in the past, but was limited by my coding abilities.
            </p>
          </div>
        </div>
      </section>

      {/* The Breakthrough */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-6">
                The Breakthrough
              </h2>
              <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-6">
                The advent of AI and tools like Claude Code changed everything for me. I can now actually do the development work myself. I&apos;ve instructed development teams in the past as a project manager and user, and have been good at documenting non-functional requirements and describing user interfaces and experiences—but I&apos;ve never been able to go further than that. The exciting thing for me now is that I can.
              </p>
              <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed">
                Finding out that I had ASD and ADHD changed my focus completely. I always knew there were some websites that I liked, some apps that I preferred, and now I understand that was because design elements within them worked better with my neurodivergent condition.
              </p>
            </div>
            <div className="bg-[var(--primary-100)] rounded-[var(--radius-xl)] p-8 text-center">
              <Brain className="w-16 h-16 text-[var(--primary-500)] mx-auto mb-4" />
              <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--primary-700)] mb-3">
                The Realization
              </h3>
              <p className="text-[var(--primary-600)]">
                Understanding my neurodivergence helped me recognize why certain designs worked better for me—and for millions of others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Glooper Exists */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-8 text-center">
            Why Glooper Exists
          </h2>
          
          <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 mb-8 border border-[var(--border-primary)]">
            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-6">
              What I realized is that there&apos;s very little out there specifically designed to cater for the variety of different issues that neurodivergent users experience daily. So I decided to develop tools for myself and a design approach that filled in gaps and helped me with things I find difficult, overwhelming, boring, or difficult to follow.
            </p>
            
            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-6">
              These tools started as coping mechanisms for me, but the more I thought about it, the more I realized this represented the change to my work life that I needed. I&apos;m lucky to have a high IQ and am considered high functioning. I have a very analytical way of looking at things, am articulate, and am good at explaining things to non-technical users in ways they find easy to engage with.
            </p>
            
            <div className="bg-[var(--primary-50)] rounded-[var(--radius-lg)] p-6 border-l-4 border-[var(--primary-500)]">
              <p className="text-[var(--font-size-lg)] font-medium text-[var(--primary-700)] mb-2">
                &ldquo;I thought: if I enjoy these things so much and they engage and excite me, why can&apos;t I change my work so that I do more of these things and less of the things I struggle with and find boring?&rdquo;
              </p>
              <p className="text-[var(--primary-600)]">
                From that thinking, Glooper was born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-4">
              My Design Philosophy
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Target className="w-12 h-12 text-[var(--primary-500)] mx-auto mb-4" />
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-3">
                Simplicity First
              </h3>
              <p className="text-[var(--text-secondary)]">
                I love simple apps that do one thing well. Minimal, uncluttered, and extremely well-designed to do simple things perfectly.
              </p>
            </div>

            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-[var(--primary-500)] mx-auto mb-4" />
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-3">
                Intuitive Design
              </h3>
              <p className="text-[var(--text-secondary)]">
                Designed for non-technical users to pick up and use without needing manuals or YouTube videos.
              </p>
            </div>

            <div className="text-center">
              <Heart className="w-12 h-12 text-[var(--primary-500)] mx-auto mb-4" />
              <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-3">
                Quality Focus
              </h3>
              <p className="text-[var(--text-secondary)]">
                Like Blackwing pencils or Japanese chef&apos;s knives—simplicity of form, doing few things extremely well.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-6">
              I love simple designs: the Remarkable tablet, the Claude Desktop interface, Google Search. I find Amazon and Temu overwhelming. Microsoft 365 and all their tools I find quite overwhelming—there&apos;s so much functionality, it&apos;s all so complicated.
            </p>
            
            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed">
              The aesthetics of a Japanese zen garden are incredibly engaging to me—simple, soothing colors, smooth wood. I want to produce simple things for people that do specific tasks—like a calculator.
            </p>
          </div>
        </div>
      </section>

      {/* My Superpower */}
      <section className="py-16 bg-[var(--primary-500)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-[var(--font-size-3xl)] font-bold text-white mb-6">
            My Superpower
          </h2>
          <p className="text-[var(--font-size-lg)] text-blue-100 mb-8 leading-relaxed">
            Looking at something and boiling it down to its simple, most basic form—not concentrating on the technology but the outcome you&apos;re delivering.
          </p>
          
          <div className="bg-white/10 rounded-[var(--radius-xl)] p-8 mb-8">
            <p className="text-white leading-relaxed mb-4">
              I&apos;m not bothered by a television that has this processor and uses that technology. I want a clear picture, great sound, good quality, and something that will last a long time.
            </p>
            <p className="text-blue-100 font-medium">
              Too many features, not enough benefits.
            </p>
          </div>
          
          <p className="text-blue-100 leading-relaxed">
            Too many great people freeze in large whiteboard sessions and post-it note environments who have great ideas but will never involve themselves because they find it daunting, embarrassing, or stressful. The person with the loudest voice doesn&apos;t necessarily have the greatest ideas.
          </p>
        </div>
      </section>

      {/* The Glooper Approach */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-primary)] mb-6">
                The Glooper Approach
              </h2>
              <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-6">
                At Glooper, I work differently. I&apos;ll take something in, interview or talk to people one-on-one, take their feedback, process it and think about it, then come back with a response.
              </p>
              <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed mb-8">
                This approach works for people like me—and it works for the many neurodivergent individuals who need digital experiences that don&apos;t overwhelm or exclude them.
              </p>
              
              <Button size="lg" asChild>
                <a href="/services">
                  See How We Can Help
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="bg-[var(--success-light)] rounded-[var(--radius-xl)] p-8 border-l-4 border-[var(--success)]">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-[var(--success)]" />
                <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--success)]">
                  1 in 5 people are neurodivergent
                </h3>
              </div>
              <p className="text-[var(--success)] font-medium text-[var(--font-size-lg)] mb-2">
                That&apos;s 20% of your customers struggling to interact with your digital presence.
              </p>
              <p className="text-[var(--success)]">
                I&apos;m here to help you change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Name Origin */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-8 border border-[var(--border-primary)]">
            <h2 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-4 text-center">
              Why &ldquo;Glooper&rdquo;?
            </h2>
            <p className="text-[var(--font-size-base)] text-[var(--text-secondary)] leading-relaxed text-center">
              The name &ldquo;Glooper&rdquo; comes from Terry Pratchett&apos;s novel &ldquo;Making Money&rdquo;—a device that uses fluid reservoirs to model complex systems. To me, it represents an analog AI, a perfect metaphor for taking complex problems and making them beautifully simple.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary-500)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-[var(--font-size-3xl)] font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-[var(--font-size-lg)] text-blue-100 mb-8">
            Let&apos;s make your digital presence more accessible for neurodivergent users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-[var(--primary-500)] hover:bg-gray-50" asChild>
              <a href="/services">
                Explore Our Services
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}