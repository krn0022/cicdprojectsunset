"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Loader2, ArrowLeft, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Reset link sent",
        description: `We've sent a password reset link to ${email}`,
      });
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
          <CardTitle className="text-2xl font-headline font-bold">Reset Password</CardTitle>
          <CardDescription>
            {isSubmitted 
              ? "Check your inbox for further instructions." 
              : "Enter your email address and we'll send you a recovery link."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-background border-white/10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button className="w-full h-11 text-lg mt-2" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Reset Link
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-accent w-8 h-8" />
              </div>
              <p className="text-muted-foreground">
                If an account exists for <span className="text-foreground font-medium">{email}</span>, you will receive a password reset link shortly.
              </p>
              <Button variant="outline" className="w-full border-white/10" onClick={() => setIsSubmitted(false)}>
                Try another email
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex items-center justify-center border-t border-white/5 pt-6">
          <Link href="/login" className="flex items-center text-sm text-accent hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}