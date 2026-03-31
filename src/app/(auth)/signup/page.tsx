"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { toast } = useToast();
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords mismatch",
        description: "Please make sure your passwords match.",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Please login with your new credentials.",
      });
      router.push('/login');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex-1 auth-gradient flex flex-col items-center justify-center px-4 py-12">
      <Link href="/" className="mb-8 flex items-center gap-2 group">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <Terminal className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold font-headline tracking-tighter">FORGEFLOW <span className="text-accent">CI</span></span>
      </Link>

      <Card className="w-full max-w-md glass-card border-white/5 shadow-2xl animate-fade-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-headline font-bold">Create an account</CardTitle>
          <CardDescription>
            Join 10,000+ developers automating their workflows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                placeholder="johndoe" 
                className="bg-background border-white/10"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                className="bg-background border-white/10"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                className="bg-background border-white/10"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                className="bg-background border-white/10"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start space-x-2 mt-2">
              <CheckCircle2 className="w-4 h-4 text-accent mt-1" />
              <p className="text-xs text-muted-foreground">
                By creating an account, you agree to our <span className="text-accent cursor-pointer hover:underline">Terms of Service</span> and <span className="text-accent cursor-pointer hover:underline">Privacy Policy</span>.
              </p>
            </div>
            <Button className="w-full h-11 text-lg mt-2" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Create Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-1 border-t border-white/5 pt-6">
          <span className="text-sm text-muted-foreground">Already have an account?</span>
          <Link href="/login" className="text-sm text-accent font-semibold hover:underline">
            Sign in instead
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}