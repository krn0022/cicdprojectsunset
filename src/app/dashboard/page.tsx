"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Terminal, 
  Activity, 
  Box, 
  Clock, 
  Settings, 
  Search, 
  Plus, 
  Bell, 
  ChevronRight,
  CheckCircle2,
  XCircle,
  Play
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0D0D11]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col bg-[#111116]">
        <div className="p-6 h-20 flex items-center gap-2 border-b border-white/5">
          <Terminal className="text-primary w-6 h-6" />
          <span className="font-bold tracking-tighter">FORGEFLOW</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon={<Activity size={18} />} label="Pipelines" active />
          <NavItem icon={<Box size={18} />} label="Artifacts" />
          <NavItem icon={<Clock size={18} />} label="Build History" />
          <NavItem icon={<Settings size={18} />} label="Environment" />
        </nav>
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">JD</div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-medium truncate">John Doe</p>
              <p className="text-[10px] text-muted-foreground truncate">Professional Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#111116]/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search pipelines, builds, teams..." 
              className="w-full h-10 bg-white/5 border border-white/5 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
              <Bell size={20} />
            </Button>
            <Button className="rounded-full gap-2">
              <Plus size={18} /> New Pipeline
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold font-headline mb-2">Active Pipelines</h1>
              <p className="text-muted-foreground">Monitor and manage your current deployment workflows.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-4">
                <p className="text-2xl font-bold">24</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Total Builds</p>
              </div>
              <div className="text-center px-4 border-l border-white/10">
                <p className="text-2xl font-bold text-emerald-500">92%</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PipelineCard 
              name="forgeflow-main-ui" 
              status="success" 
              duration="2m 14s" 
              lastBuild="12 mins ago" 
            />
            <PipelineCard 
              name="auth-service-micro" 
              status="failed" 
              duration="45s" 
              lastBuild="1 hour ago" 
            />
            <PipelineCard 
              name="data-sync-engine" 
              status="running" 
              duration="In progress" 
              lastBuild="Started now" 
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold font-headline">Recent Build Logs</h2>
            <Card className="glass-card border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5 text-xs text-muted-foreground bg-white/5">
                      <th className="text-left py-4 px-6 font-medium uppercase tracking-widest">Build ID</th>
                      <th className="text-left py-4 px-6 font-medium uppercase tracking-widest">Branch</th>
                      <th className="text-left py-4 px-6 font-medium uppercase tracking-widest">Commit</th>
                      <th className="text-left py-4 px-6 font-medium uppercase tracking-widest">Duration</th>
                      <th className="text-left py-4 px-6 font-medium uppercase tracking-widest">Status</th>
                      <th className="text-right py-4 px-6 font-medium uppercase tracking-widest">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <BuildRow id="#FF-1240" branch="main" commit="a8c2f1e" duration="1m 30s" status="success" />
                    <BuildRow id="#FF-1239" branch="feature/oauth" commit="9d1e4b2" duration="4m 12s" status="success" />
                    <BuildRow id="#FF-1238" branch="main" commit="3f7g1h9" duration="0m 45s" status="failed" />
                    <BuildRow id="#FF-1237" branch="hotfix/cors" commit="5k2l8m1" duration="2m 05s" status="success" />
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
      active ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
    }`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function PipelineCard({ name, status, duration, lastBuild }: { name: string; status: 'success' | 'failed' | 'running'; duration: string; lastBuild: string }) {
  return (
    <Card className="glass-card border-white/5 hover:border-primary/50 transition-all group">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-bold truncate">{name}</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <div className={`w-2 h-2 rounded-full ${
              status === 'success' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 
              status === 'failed' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]' : 
              'bg-amber-500 animate-pulse'
            }`} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {status}
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground group-hover:text-primary transition-colors">
          <Play size={18} fill="currentColor" />
        </Button>
      </CardHeader>
      <CardContent className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-[10px] text-muted-foreground uppercase">Duration</p>
          <p className="text-xs font-medium">{duration}</p>
        </div>
        <div className="text-right space-y-1">
          <p className="text-[10px] text-muted-foreground uppercase">Last Activity</p>
          <p className="text-xs font-medium">{lastBuild}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function BuildRow({ id, branch, commit, duration, status }: { id: string; branch: string; commit: string; duration: string; status: 'success' | 'failed' }) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
      <td className="py-4 px-6 font-mono text-primary font-bold">{id}</td>
      <td className="py-4 px-6 text-muted-foreground">{branch}</td>
      <td className="py-4 px-6"><span className="bg-white/10 px-2 py-1 rounded text-xs font-mono">{commit}</span></td>
      <td className="py-4 px-6 text-muted-foreground">{duration}</td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          {status === 'success' ? (
            <CheckCircle2 className="text-emerald-500 w-4 h-4" />
          ) : (
            <XCircle className="text-rose-500 w-4 h-4" />
          )}
          <span className={status === 'success' ? 'text-emerald-500 font-medium' : 'text-rose-500 font-medium'}>
            {status === 'success' ? 'Success' : 'Failed'}
          </span>
        </div>
      </td>
      <td className="py-4 px-6 text-right">
        <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground group-hover:text-foreground">
          View Logs <ChevronRight className="ml-1 w-3 h-3" />
        </Button>
      </td>
    </tr>
  );
}