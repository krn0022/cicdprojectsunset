"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Github, Mail, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast({
          title: "Successfully logged in",
          description: "Welcome back to ForgeFlow CI dashboard.",
        });
        router.push('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Authentication Failed",
          description: "Please check your credentials and try again.",
        });
      }
    }, 1500);
  };

  return (
    <div className="flex-1 auth-gradient flex flex-col items-center justify-center px-4">
      <Link href="/" className="mb-8 flex items-center gap-2 group">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <Terminal className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold font-headline tracking-tighter">FORGEFLOW <span className="text-accent">CI</span></span>
      </Link>

      <Card className="w-full max-w-md glass-card border-white/5 shadow-2xl animate-fade-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-headline font-bold">Sign in</CardTitle>
          <CardDescription>
            Enter your email and password to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                className="bg-background border-white/10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" name="forgot-password" className="text-xs text-accent hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                className="bg-background border-white/10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button className="w-full h-11 text-lg" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-1 border-t border-white/5 pt-6">
          <span className="text-sm text-muted-foreground">Don't have an account?</span>
          <Link href="/signup" className="text-sm text-accent font-semibold hover:underline">
            Sign up for free
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}