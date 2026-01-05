import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Badge } from './badge';
import { Input } from './input';
import { Separator } from './separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const meta: Meta = {
  title: 'Examples/Dashboard Page',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 border-2 border-primary bg-primary" />
                <span className="text-sm font-semibold uppercase">TaskFlow</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <nav className="flex items-center gap-4">
                <a href="#" className="text-xs font-semibold uppercase text-primary">Dashboard</a>
                <a href="#" className="text-xs uppercase text-muted-foreground hover:text-foreground">Projects</a>
                <a href="#" className="text-xs uppercase text-muted-foreground hover:text-foreground">Tasks</a>
                <a href="#" className="text-xs uppercase text-muted-foreground hover:text-foreground">Team</a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64"
              />
              <Button variant="secondary" size="sm">
                <span className="text-xs">👤</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r-2 border-border bg-card">
          <div className="p-6">
            <div className="mb-6">
              <Button className="w-full">+ New Task</Button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
                  Workspace
                </div>
                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-2 rounded border-2 border-primary bg-primary px-3 py-2 text-xs font-semibold uppercase text-primary-foreground">
                    <span>📊</span>
                    <span>Overview</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded px-3 py-2 text-xs uppercase text-muted-foreground hover:bg-secondary">
                    <span>📋</span>
                    <span>My Tasks</span>
                    <Badge variant="secondary" className="ml-auto">12</Badge>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded px-3 py-2 text-xs uppercase text-muted-foreground hover:bg-secondary">
                    <span>⭐</span>
                    <span>Starred</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded px-3 py-2 text-xs uppercase text-muted-foreground hover:bg-secondary">
                    <span>📁</span>
                    <span>Projects</span>
                  </a>
                </nav>
              </div>

              <div>
                <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
                  Recent Projects
                </div>
                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-2 rounded px-3 py-2 text-xs hover:bg-secondary">
                    <div className="size-2 bg-yellow-500" />
                    <span>Website Redesign</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded px-3 py-2 text-xs hover:bg-secondary">
                    <div className="size-2 bg-green-500" />
                    <span>Mobile App</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded px-3 py-2 text-xs hover:bg-secondary">
                    <div className="size-2 bg-blue-500" />
                    <span>API Integration</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="mb-6">
            <h1 className="mb-1 text-2xl font-bold uppercase">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back! Here's what's happening.</p>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">Total Tasks</p>
                    <p className="mt-1 text-2xl font-bold">128</p>
                  </div>
                  <div className="flex size-12 items-center justify-center border-2 border-border bg-secondary">
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
                    <p className="text-xs uppercase text-muted-foreground">Completed</p>
                    <p className="mt-1 text-2xl font-bold">84</p>
                  </div>
                  <div className="flex size-12 items-center justify-center border-2 border-border bg-secondary">
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
                    <p className="text-xs uppercase text-muted-foreground">In Progress</p>
                    <p className="mt-1 text-2xl font-bold">32</p>
                  </div>
                  <div className="flex size-12 items-center justify-center border-2 border-border bg-secondary">
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
                    <p className="text-xs uppercase text-muted-foreground">Overdue</p>
                    <p className="mt-1 text-2xl font-bold">12</p>
                  </div>
                  <div className="flex size-12 items-center justify-center border-2 border-border bg-secondary">
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
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest task updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center border-2 border-border bg-green-100 text-xs font-bold">
                      ✓
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Design mockups completed</p>
                      <p className="text-xs text-muted-foreground">Website Redesign • 2 hours ago</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center border-2 border-border bg-blue-100 text-xs font-bold">
                      📝
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">New comment on API endpoint</p>
                      <p className="text-xs text-muted-foreground">API Integration • 4 hours ago</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center border-2 border-border bg-yellow-100 text-xs font-bold">
                      +
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">New task assigned to you</p>
                      <p className="text-xs text-muted-foreground">Mobile App • 1 day ago</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center border-2 border-border bg-purple-100 text-xs font-bold">
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
                <Button variant="secondary" className="w-full">View All Activity</Button>
              </CardFooter>
            </Card>

            {/* Task Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Task Progress</CardTitle>
                <CardDescription>Track your weekly completion rate</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week">
                  <TabsList className="mb-4 w-full">
                    <TabsTrigger value="week" className="flex-1">Week</TabsTrigger>
                    <TabsTrigger value="month" className="flex-1">Month</TabsTrigger>
                    <TabsTrigger value="year" className="flex-1">Year</TabsTrigger>
                  </TabsList>
                  <TabsContent value="week" className="space-y-3">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">Monday</span>
                        <span className="text-muted-foreground">8/10 tasks</span>
                      </div>
                      <div className="h-3 border-2 border-border bg-secondary">
                        <div className="h-full bg-primary" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">Tuesday</span>
                        <span className="text-muted-foreground">6/8 tasks</span>
                      </div>
                      <div className="h-3 border-2 border-border bg-secondary">
                        <div className="h-full bg-primary" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">Wednesday</span>
                        <span className="text-muted-foreground">10/12 tasks</span>
                      </div>
                      <div className="h-3 border-2 border-border bg-secondary">
                        <div className="h-full bg-primary" style={{ width: '83%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">Thursday</span>
                        <span className="text-muted-foreground">5/9 tasks</span>
                      </div>
                      <div className="h-3 border-2 border-border bg-secondary">
                        <div className="h-full bg-primary" style={{ width: '56%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase">Friday</span>
                        <span className="text-muted-foreground">7/7 tasks</span>
                      </div>
                      <div className="h-3 border-2 border-border bg-primary">
                        <div className="h-full bg-primary" style={{ width: '100%' }} />
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
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks due in the next 7 days</CardDescription>
                </div>
                <Button size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-4 border-l-4 border-yellow-500 bg-secondary/50 p-3">
                  <input type="checkbox" className="size-4 border-2 border-border" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Update API documentation</p>
                    <p className="text-xs text-muted-foreground">API Integration • Due in 2 days</p>
                  </div>
                  <Badge variant="outline">High</Badge>
                </div>

                <div className="flex items-center gap-4 border-l-4 border-blue-500 bg-secondary/50 p-3">
                  <input type="checkbox" className="size-4 border-2 border-border" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Review pull requests</p>
                    <p className="text-xs text-muted-foreground">Mobile App • Due in 3 days</p>
                  </div>
                  <Badge variant="secondary">Medium</Badge>
                </div>

                <div className="flex items-center gap-4 border-l-4 border-green-500 bg-secondary/50 p-3">
                  <input type="checkbox" className="size-4 border-2 border-border" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Prepare presentation slides</p>
                    <p className="text-xs text-muted-foreground">Website Redesign • Due in 5 days</p>
                  </div>
                  <Badge variant="secondary">Low</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  ),
};
