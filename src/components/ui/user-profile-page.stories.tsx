import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Badge } from './badge';
import { Input } from './input';
import { Separator } from './separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Textarea } from './textarea';

const meta: Meta = {
  title: 'Examples/User Profile Page',
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
                <a href="#" className="text-xs uppercase text-muted-foreground hover:text-foreground">Dashboard</a>
                <a href="#" className="text-xs uppercase text-muted-foreground hover:text-foreground">Projects</a>
                <a href="#" className="text-xs uppercase text-muted-foreground hover:text-foreground">Tasks</a>
                <a href="#" className="text-xs font-semibold uppercase text-primary">Profile</a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm">Sign Out</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <div className="border-b-2 border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-start gap-6">
            <div className="flex size-24 items-center justify-center border-4 border-border bg-primary text-4xl font-bold text-primary-foreground">
              JD
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <h1 className="text-2xl font-bold uppercase">Jane Doe</h1>
                <Badge>Pro Member</Badge>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                Product Designer • San Francisco, CA • Joined January 2024
              </p>
              <div className="flex items-center gap-2">
                <Button size="sm">Edit Profile</Button>
                <Button variant="secondary" size="sm">Share Profile</Button>
              </div>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">124</div>
                <div className="text-xs uppercase text-muted-foreground">Tasks</div>
              </div>
              <div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-xs uppercase text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold">92%</div>
                <div className="text-xs uppercase text-muted-foreground">Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* About */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm">
                      Passionate product designer with 5+ years of experience creating user-centered
                      digital experiences. I love collaborating with teams to solve complex problems
                      and deliver impactful solutions.
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">📧 Email:</span>
                      <span className="text-sm">jane.doe@example.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">🔗 Website:</span>
                      <span className="text-sm">janedoe.design</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">📍 Location:</span>
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">💼 Role:</span>
                      <span className="text-sm">Senior Product Designer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">UI Design</Badge>
                    <Badge variant="outline">UX Research</Badge>
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">Prototyping</Badge>
                    <Badge variant="outline">Design Systems</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold">84</div>
                    <div className="text-xs uppercase text-muted-foreground">Completed Tasks</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold">32</div>
                    <div className="text-xs uppercase text-muted-foreground">In Progress</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold">156</div>
                    <div className="text-xs uppercase text-muted-foreground">Total Hours</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold">28</div>
                    <div className="text-xs uppercase text-muted-foreground">Streak Days</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Projects</CardTitle>
                  <Button variant="secondary" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 border-l-4 border-yellow-500 bg-secondary/50 p-4">
                    <div className="flex size-12 items-center justify-center border-2 border-border bg-yellow-100 text-xl">
                      🎨
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold">Website Redesign</p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        Complete overhaul of company website with modern design
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Design</Badge>
                        <Badge variant="outline" className="text-xs">Frontend</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 text-xs text-muted-foreground">Progress</div>
                      <div className="text-sm font-bold">75%</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-l-4 border-green-500 bg-secondary/50 p-4">
                    <div className="flex size-12 items-center justify-center border-2 border-border bg-green-100 text-xl">
                      📱
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold">Mobile App</p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        iOS and Android app for customer engagement
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Mobile</Badge>
                        <Badge variant="outline" className="text-xs">UX</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 text-xs text-muted-foreground">Progress</div>
                      <div className="text-sm font-bold">92%</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-l-4 border-blue-500 bg-secondary/50 p-4">
                    <div className="flex size-12 items-center justify-center border-2 border-border bg-blue-100 text-xl">
                      ⚙️
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold">API Integration</p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        Connect third-party services to platform
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Backend</Badge>
                        <Badge variant="outline" className="text-xs">API</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 text-xs text-muted-foreground">Progress</div>
                      <div className="text-sm font-bold">45%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Activity Timeline</CardTitle>
                <CardDescription>Your recent contributions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 items-center justify-center border-2 border-border bg-green-100 text-sm font-bold">
                        ✓
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold">Completed task: Design mockups</p>
                      <p className="mb-2 text-xs text-muted-foreground">Website Redesign • 2 hours ago</p>
                      <p className="text-xs">
                        Finished all homepage mockups and shared with the team for feedback.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 items-center justify-center border-2 border-border bg-blue-100 text-sm font-bold">
                        💬
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold">Commented on API endpoint</p>
                      <p className="mb-2 text-xs text-muted-foreground">API Integration • 5 hours ago</p>
                      <p className="text-xs">
                        Suggested improvements to the authentication flow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 items-center justify-center border-2 border-border bg-purple-100 text-sm font-bold">
                        📁
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold">Created new project</p>
                      <p className="mb-2 text-xs text-muted-foreground">1 day ago</p>
                      <p className="text-xs">
                        Started the Mobile App project with initial setup and planning.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 items-center justify-center border-2 border-border bg-yellow-100 text-sm font-bold">
                        +
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold">Added 5 new tasks</p>
                      <p className="mb-2 text-xs text-muted-foreground">Website Redesign • 2 days ago</p>
                      <p className="text-xs">
                        Created tasks for the next sprint including responsive design work.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 items-center justify-center border-2 border-border bg-orange-100 text-sm font-bold">
                        🏆
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold">Achievement unlocked: 100 tasks completed!</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">First Name</label>
                    <Input defaultValue="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">Last Name</label>
                    <Input defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase">Email</label>
                  <Input type="email" defaultValue="jane.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase">Bio</label>
                  <Textarea
                    defaultValue="Passionate product designer with 5+ years of experience creating user-centered digital experiences."
                    rows={4}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">Website</label>
                    <Input defaultValue="janedoe.design" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">Location</label>
                    <Input defaultValue="San Francisco, CA" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="secondary">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Email Notifications</p>
                    <p className="text-xs text-muted-foreground">Receive updates about your tasks</p>
                  </div>
                  <input type="checkbox" defaultChecked className="size-5 border-2 border-border" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Weekly Summary</p>
                    <p className="text-xs text-muted-foreground">Get a weekly report of your activity</p>
                  </div>
                  <input type="checkbox" defaultChecked className="size-5 border-2 border-border" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Task Reminders</p>
                    <p className="text-xs text-muted-foreground">Notifications for upcoming deadlines</p>
                  </div>
                  <input type="checkbox" className="size-5 border-2 border-border" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save Preferences</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Irreversible actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Delete Account</p>
                    <p className="text-xs text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};
