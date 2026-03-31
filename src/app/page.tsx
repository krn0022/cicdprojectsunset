import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Terminal, Cpu, Shield, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1 auth-gradient flex flex-col">
      <header className="px-6 lg:px-12 h-20 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Terminal className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-headline tracking-tighter">FORGEFLOW <span className="text-accent">CI</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
          <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
          <Button asChild variant="default" className="rounded-full px-6">
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-8 animate-fade-in">
          <Zap size={14} />
          <span>CI/CD REVOLUTIONIZED</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 tracking-tighter leading-tight animate-fade-in [animation-delay:100ms]">
          Build, Test, and Deploy <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">at the Speed of Thought</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl animate-fade-in [animation-delay:200ms]">
          ForgeFlow CI provides the enterprise-grade automation you need to deliver high-quality software reliably and frequently.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms]">
          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-xl shadow-xl shadow-primary/20">
            <Link href="/signup">
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-white/10 hover:bg-white/5 backdrop-blur-sm">
            <Link href="/login">View Dashboard</Link>
          </Button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in [animation-delay:400ms]">
          <FeatureCard 
            icon={<Cpu className="w-6 h-6 text-accent" />}
            title="Parallel Pipelines"
            description="Run your test suites in parallel across multiple isolated containers to cut build times by 70%."
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-accent" />}
            title="SecOps Integrated"
            description="Automated vulnerability scanning and compliance checks built directly into every deployment stage."
          />
          <FeatureCard 
            icon={<Terminal className="w-6 h-6 text-accent" />}
            title="Custom Runners"
            description="Use our cloud runners or bring your own infrastructure for total control over your build environment."
          />
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-sm text-muted-foreground">© 2024 ForgeFlow CI. Built for modern engineering teams.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 rounded-2xl glass-card text-left group hover:border-accent/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-headline tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}