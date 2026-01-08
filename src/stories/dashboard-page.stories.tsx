import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const meta: Meta = {
  title: 'Examples/Dashboard Page',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background font-mono">
      {/* Header */}
      <header className="border-b-2 border-primary bg-card">
        <div className="px-4 py-4 lg:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-none border-2 border-primary bg-primary" />
                <span className="text-sm font-semibold uppercase">TASKFLOW</span>
              </div>
              <Separator orientation="vertical" className="hidden h-6 lg:block" />
              <nav className="flex items-center gap-4">
                <a
                  href="#"
                  className="relative text-xs font-semibold uppercase text-primary before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100"
                >
                  DASHBOARD
                </a>
                <a
                  href="#"
                  className="relative text-xs uppercase text-muted-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                >
                  PROJECTS
                </a>
                <a
                  href="#"
                  className="relative text-xs uppercase text-muted-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                >
                  TASKS
                </a>
                <a
                  href="#"
                  className="relative text-xs uppercase text-muted-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:text-foreground hover:before:w-1 hover:before:opacity-100"
                >
                  TEAM
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Input
                type="search"
                placeholder="SEARCH..."
                className="w-full lg:w-64"
              />
              <Button variant="secondary" size="sm">
                <span className="text-xs">👤</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="border-b-2 border-primary bg-card lg:w-64 lg:border-b-0 lg:border-r-2">
          <div className="p-4 lg:p-6">
            <div className="mb-6">
              <Button className="w-full">+ NEW TASK</Button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
                  WORKSPACE
                </div>
                <nav className="space-y-1">
                  <a
                    href="#"
                    className="flex h-11 items-center gap-2 rounded-none border-2 border-primary bg-primary px-3 text-xs font-semibold uppercase text-primary-foreground"
                  >
                    <span>📊</span>
                    <span>OVERVIEW</span>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-11 items-center gap-2 rounded-none px-3 text-xs uppercase text-muted-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:bg-secondary hover:before:w-1 hover:before:opacity-100"
                  >
                    <span>📋</span>
                    <span>MY TASKS</span>
                    <Badge variant="secondary" className="ml-auto">12</Badge>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-11 items-center gap-2 rounded-none px-3 text-xs uppercase text-muted-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:bg-secondary hover:before:w-1 hover:before:opacity-100"
                  >
                    <span>⭐</span>
                    <span>STARRED</span>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-11 items-center gap-2 rounded-none px-3 text-xs uppercase text-muted-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:bg-secondary hover:before:w-1 hover:before:opacity-100"
                  >
                    <span>📁</span>
                    <span>PROJECTS</span>
                  </a>
                </nav>
              </div>

              <div>
                <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
                  RECENT PROJECTS
                </div>
                <nav className="space-y-1">
                  <a
                    href="#"
                    className="relative flex h-11 items-center gap-2 rounded-none px-3 text-xs before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:bg-secondary hover:before:w-1 hover:before:opacity-100"
                  >
                    <div className="size-2 rounded-none bg-yellow-500" />
                    <span>Website Redesign</span>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-11 items-center gap-2 rounded-none px-3 text-xs before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:bg-secondary hover:before:w-1 hover:before:opacity-100"
                  >
                    <div className="size-2 rounded-none bg-green-500" />
                    <span>Mobile App</span>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-11 items-center gap-2 rounded-none px-3 text-xs before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:bg-secondary hover:before:w-1 hover:before:opacity-100"
                  >
                    <div className="size-2 rounded-none bg-blue-500" />
                    <span>API Integration</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          {/* Stats Grid */}
          <div className="mb-6">
            <h1 className="mb-1 text-2xl font-bold uppercase">DASHBOARD</h1>
            <p className="text-sm text-muted-foreground">Welcome back! Here's what's happening.</p>
          </div>

          <div className="mb-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">TOTAL TASKS</p>
                    <p className="mt-1 text-2xl font-bold">128</p>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-none border-2 border-primary bg-secondary">
                    <span className="text-lg">📋</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  <span className="text-green-600">+12%</span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">COMPLETED</p>
                    <p className="mt-1 text-2xl font-bold">84</p>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-none border-2 border-primary bg-secondary">
                    <span className="text-lg">✓</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  <span className="text-green-600">+8%</span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">IN PROGRESS</p>
                    <p className="mt-1 text-2xl font-bold">32</p>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-none border-2 border-primary bg-secondary">
                    <span className="text-lg">⏳</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  <span className="text-yellow-600">-3%</span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">OVERDUE</p>
                    <p className="mt-1 text-2xl font-bold">12</p>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-none border-2 border-primary bg-secondary">
                    <span className="text-lg">⚠️</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  <span className="text-red-600">+5%</span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>RECENT ACTIVITY</CardTitle>
                <CardDescription>Your latest task updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-none border-2 border-primary bg-green-100 text-xs font-bold">
                      ✓
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Design mockups completed</p>
                      <p className="text-xs text-muted-foreground">Website Redesign • 2 hours ago</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-none border-2 border-primary bg-blue-100 text-xs font-bold">
                      📝
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">New comment on API endpoint</p>
                      <p className="text-xs text-muted-foreground">API Integration • 4 hours ago</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-none border-2 border-primary bg-yellow-100 text-xs font-bold">
                      +
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">New task assigned to you</p>
                      <p className="text-xs text-muted-foreground">Mobile App • 1 day ago</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-none border-2 border-primary bg-purple-100 text-xs font-bold">
                      👤
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Sarah joined your project</p>
                      <p className="text-xs text-muted-foreground">Website Redesign • 2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">VIEW ALL ACTIVITY</Button>
              </CardFooter>
            </Card>

            {/* Task Progress */}
            <Card>
              <CardHeader>
                <CardTitle>TASK PROGRESS</CardTitle>
                <CardDescription>Track your weekly completion rate</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week">
                  <TabsList className="mb-4 w-full">
                    <TabsTrigger value="week" className="flex-1">WEEK</TabsTrigger>
                    <TabsTrigger value="month" className="flex-1">MONTH</TabsTrigger>
                    <TabsTrigger value="year" className="flex-1">YEAR</TabsTrigger>
                  </TabsList>
                  <TabsContent value="week" className="space-y-3">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">MONDAY</span>
                        <span className="text-muted-foreground">8/10 tasks</span>
                      </div>
                      <div className="h-3 rounded-none border-2 border-primary bg-secondary">
                        <div className="h-full rounded-none bg-primary" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">TUESDAY</span>
                        <span className="text-muted-foreground">6/8 tasks</span>
                      </div>
                      <div className="h-3 rounded-none border-2 border-primary bg-secondary">
                        <div className="h-full rounded-none bg-primary" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">WEDNESDAY</span>
                        <span className="text-muted-foreground">10/12 tasks</span>
                      </div>
                      <div className="h-3 rounded-none border-2 border-primary bg-secondary">
                        <div className="h-full rounded-none bg-primary" style={{ width: '83%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">THURSDAY</span>
                        <span className="text-muted-foreground">5/9 tasks</span>
                      </div>
                      <div className="h-3 rounded-none border-2 border-primary bg-secondary">
                        <div className="h-full rounded-none bg-primary" style={{ width: '56%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">FRIDAY</span>
                        <span className="text-muted-foreground">7/7 tasks</span>
                      </div>
                      <div className="h-3 rounded-none border-2 border-primary bg-primary">
                        <div className="h-full rounded-none bg-primary" style={{ width: '100%' }} />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Tasks */}
          <Card className="mt-6">
            <CardHeader>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <CardTitle>UPCOMING TASKS</CardTitle>
                  <CardDescription>Tasks due in the next 7 days</CardDescription>
                </div>
                <Button size="sm">VIEW ALL</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="relative flex items-center gap-4 rounded-none border-l-4 border-yellow-500 bg-secondary/50 p-3 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100">
                  <input type="checkbox" className="size-4 rounded-none border-2 border-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Update API documentation</p>
                    <p className="text-xs text-muted-foreground">API Integration • Due in 2 days</p>
                  </div>
                  <Badge variant="outline">HIGH</Badge>
                </div>

                <div className="relative flex items-center gap-4 rounded-none border-l-4 border-blue-500 bg-secondary/50 p-3 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100">
                  <input type="checkbox" className="size-4 rounded-none border-2 border-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Review pull requests</p>
                    <p className="text-xs text-muted-foreground">Mobile App • Due in 3 days</p>
                  </div>
                  <Badge variant="secondary">MEDIUM</Badge>
                </div>

                <div className="relative flex items-center gap-4 rounded-none border-l-4 border-green-500 bg-secondary/50 p-3 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100">
                  <input type="checkbox" className="size-4 rounded-none border-2 border-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Prepare presentation slides</p>
                    <p className="text-xs text-muted-foreground">Website Redesign • Due in 5 days</p>
                  </div>
                  <Badge variant="secondary">LOW</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  ),
};
