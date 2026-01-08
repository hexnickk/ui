import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Badge } from './badge';
import { Input } from './input';
import { Separator } from './separator';
import { MarqueeBar } from './marquee-bar';

const meta: Meta = {
  title: 'Examples/Landing Page',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background font-mono">
      {/* Announcement Bar */}
      <MarqueeBar
        items={[
          'New Feature: Advanced Analytics Dashboard Now Available',
          'Limited Time Offer: 50% Off Annual Plans',
          'Join 10,000+ Teams Already Using TaskFlow',
          'Free 14-Day Trial - No Credit Card Required',
        ]}
        speed="default"
        pauseOnHover={true}
      />

      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-none border-2 border-primary bg-primary" />
              <span className="text-sm font-semibold uppercase">TASKFLOW</span>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <a
                href="#features"
                className="relative text-xs uppercase before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-primary hover:before:w-1 hover:before:opacity-100"
              >
                FEATURES
              </a>
              <a
                href="#pricing"
                className="relative text-xs uppercase before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-primary hover:before:w-1 hover:before:opacity-100"
              >
                PRICING
              </a>
              <a
                href="#about"
                className="relative text-xs uppercase before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-primary hover:before:w-1 hover:before:opacity-100"
              >
                ABOUT
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">SIGN IN</Button>
              <Button size="sm">GET STARTED</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-2 border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">NEW IN 2026</Badge>
            <h1 className="mb-4 text-4xl font-bold uppercase tracking-tight">
              MANAGE YOUR TASKS LIKE NEVER BEFORE
            </h1>
            <p className="mb-8 text-base text-muted-foreground">
              TaskFlow helps teams organize, track, and complete projects with brutal efficiency.
              No fluff, just results.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="enter your email"
                size="lg"
                className="flex-1"
              />
              <Button size="lg" className="sm:w-auto">START FREE TRIAL</Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b-2 border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold uppercase">FEATURES THAT MATTER</h2>
            <p className="text-sm text-muted-foreground">
              Everything you need to stay productive
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>REAL-TIME SYNC</CardTitle>
                <CardDescription>
                  Changes sync instantly across all devices. Work from anywhere, anytime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Instant updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Offline mode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Cloud backup</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TEAM COLLABORATION</CardTitle>
                <CardDescription>
                  Assign tasks, set deadlines, and track progress together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Task assignments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Comments & mentions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Activity feed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ADVANCED ANALYTICS</CardTitle>
                <CardDescription>
                  Track productivity and identify bottlenecks with detailed reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Time tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Custom reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-none bg-primary" />
                    <span className="text-xs">Export data</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b-2 border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold uppercase">SIMPLE PRICING</h2>
            <p className="text-sm text-muted-foreground">
              Choose the plan that works for you
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>STARTER</CardTitle>
                <CardDescription>For individuals and small teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold">$9</div>
                  <div className="text-xs text-muted-foreground">per user/month</div>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>100 tasks per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Basic analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">CHOOSE PLAN</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>PROFESSIONAL</CardTitle>
                  <Badge>POPULAR</Badge>
                </div>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold">$29</div>
                  <div className="text-xs text-muted-foreground">per user/month</div>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">CHOOSE PLAN</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ENTERPRISE</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold uppercase">CUSTOM</div>
                  <div className="text-xs text-muted-foreground">contact for pricing</div>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">[✓]</span>
                    <span>SLA guarantee</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">CONTACT SALES</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b-2 border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold uppercase">READY TO GET STARTED?</h2>
            <p className="mb-8 text-sm opacity-90">
              Join thousands of teams already using TaskFlow to stay organized and productive.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="secondary" size="lg">START FREE TRIAL</Button>
              <Button variant="secondary" size="lg">SCHEDULE DEMO</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase">PRODUCT</div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase">COMPANY</div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase">RESOURCES</div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase">LEGAL</div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
            <div>© 2026 TaskFlow. All rights reserved.</div>
            <div className="flex gap-4">
              <a
                href="#"
                className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
              >
                Twitter
              </a>
              <a
                href="#"
                className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
              >
                GitHub
              </a>
              <a
                href="#"
                className="relative inline-block before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ),
};
