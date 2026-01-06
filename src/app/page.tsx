import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import { Linkedin, Mail, Slack, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="py-20 bg-slate-900/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Tech Stack</h2>
            <p className="text-slate-400">Powered by enterprise-grade automation and cutting-edge AI</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            {[
              { name: "n8n", icon: <Zap className="text-orange-500" /> },
              { name: "OpenAI / Anthropic", icon: <Terminal className="text-green-500" /> },
              { name: "Airtable / Sheets", icon: <Terminal className="text-blue-500" /> },
              { name: "Slack / Telegram", icon: <Slack className="text-purple-500" /> }
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-2xl">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to automate your growth?</h2>
            <p className="text-slate-400">Join the waitlist for the AI LinkedIn Agent.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 AI LinkedIn Agent. Built with n8n & Next.js</p>
        </div>
      </footer>
    </main>
  );
}

function Zap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.75V3.5a.5.5 0 0 1 .832-.374l14.5 12.802a.5.5 0 0 1-.332.872H11.5l.5 6.5a.5.5 0 0 1-.832.374L4.168 15.124A.5.5 0 0 1 4 14.75Z" />
    </svg>
  );
}
