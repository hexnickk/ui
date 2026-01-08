import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

const meta: Meta = {
  title: 'Examples/User Profile Page',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background font-mono">
      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="px-4 py-4 lg:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-none border-2 border-primary bg-primary" />
                <span className="text-sm font-semibold uppercase">TASKFLOW</span>
              </div>
              <Separator orientation="vertical" className="hidden h-6 lg:block" />
              <nav className="flex items-center gap-3 lg:gap-4">
                <a
                  href="#"
                  className="relative text-xs uppercase text-muted-foreground hover:text-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100"
                >
                  DASHBOARD
                </a>
                <a
                  href="#"
                  className="relative text-xs uppercase text-muted-foreground hover:text-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100"
                >
                  PROJECTS
                </a>
                <a
                  href="#"
                  className="relative text-xs uppercase text-muted-foreground hover:text-foreground before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100"
                >
                  TASKS
                </a>
                <a
                  href="#"
                  className="relative text-xs font-semibold uppercase text-primary before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100"
                >
                  PROFILE
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm">SIGN OUT</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <div className="border-b-2 border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6 lg:py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Avatar - Square with no border radius */}
            <div className="flex size-20 shrink-0 items-center justify-center rounded-none border-2 border-border bg-primary text-3xl font-bold text-primary-foreground lg:size-24 lg:text-4xl">
              JD
            </div>

            <div className="flex-1">
              <div className="mb-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
                <h1 className="text-xl font-bold uppercase lg:text-2xl">JANE DOE</h1>
                <Badge>PRO MEMBER</Badge>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                Product Designer • San Francisco, CA • Joined January 2024
              </p>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                <Button size="sm">EDIT PROFILE</Button>
                <Button variant="secondary" size="sm">SHARE PROFILE</Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-xl font-bold lg:text-2xl">124</div>
                <div className="text-xs uppercase text-muted-foreground">TASKS</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold lg:text-2xl">18</div>
                <div className="text-xs uppercase text-muted-foreground">PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold lg:text-2xl">92%</div>
                <div className="text-xs uppercase text-muted-foreground">COMPLETE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6 lg:py-8">
        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
            <TabsTrigger value="activity">ACTIVITY</TabsTrigger>
            <TabsTrigger value="settings">SETTINGS</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* About */}
              <Card className="rounded-none border-2 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="uppercase">ABOUT</CardTitle>
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
                    <div className="flex flex-col gap-1 lg:flex-row lg:items-start lg:gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">[EMAIL]:</span>
                      <span className="text-sm">jane.doe@example.com</span>
                    </div>
                    <div className="flex flex-col gap-1 lg:flex-row lg:items-start lg:gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">[WEBSITE]:</span>
                      <span className="text-sm">janedoe.design</span>
                    </div>
                    <div className="flex flex-col gap-1 lg:flex-row lg:items-start lg:gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">[LOCATION]:</span>
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <div className="flex flex-col gap-1 lg:flex-row lg:items-start lg:gap-3">
                      <span className="text-sm font-semibold uppercase text-muted-foreground">[ROLE]:</span>
                      <span className="text-sm">Senior Product Designer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="rounded-none border-2">
                <CardHeader>
                  <CardTitle className="uppercase">SKILLS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">UI DESIGN</Badge>
                    <Badge variant="outline">UX RESEARCH</Badge>
                    <Badge variant="outline">FIGMA</Badge>
                    <Badge variant="outline">PROTOTYPING</Badge>
                    <Badge variant="outline">DESIGN SYSTEMS</Badge>
                    <Badge variant="outline">REACT</Badge>
                    <Badge variant="outline">TYPESCRIPT</Badge>
                    <Badge variant="outline">TAILWIND</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="rounded-none border-2">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-xl font-bold lg:text-2xl">84</div>
                    <div className="text-xs uppercase text-muted-foreground">COMPLETED TASKS</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none border-2">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-xl font-bold lg:text-2xl">32</div>
                    <div className="text-xs uppercase text-muted-foreground">IN PROGRESS</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none border-2">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-xl font-bold lg:text-2xl">156</div>
                    <div className="text-xs uppercase text-muted-foreground">TOTAL HOURS</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none border-2">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="mb-2 text-xl font-bold lg:text-2xl">28</div>
                    <div className="text-xs uppercase text-muted-foreground">STREAK DAYS</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Projects */}
            <Card className="rounded-none border-2">
              <CardHeader>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <CardTitle className="uppercase">RECENT PROJECTS</CardTitle>
                  <Button variant="secondary" size="sm">VIEW ALL</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="flex flex-col gap-4 rounded-none border-l-4 border-yellow-500 bg-secondary/50 p-4 lg:flex-row lg:items-center">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-none border-2 border-border bg-yellow-100 text-xl">
                      [D]
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold uppercase">WEBSITE REDESIGN</p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        Complete overhaul of company website with modern design
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">DESIGN</Badge>
                        <Badge variant="outline" className="text-xs">FRONTEND</Badge>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <div className="mb-1 text-xs uppercase text-muted-foreground">PROGRESS</div>
                      <div className="text-sm font-bold">75%</div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="flex flex-col gap-4 rounded-none border-l-4 border-green-500 bg-secondary/50 p-4 lg:flex-row lg:items-center">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-none border-2 border-border bg-green-100 text-xl">
                      [M]
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold uppercase">MOBILE APP</p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        iOS and Android app for customer engagement
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">MOBILE</Badge>
                        <Badge variant="outline" className="text-xs">UX</Badge>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <div className="mb-1 text-xs uppercase text-muted-foreground">PROGRESS</div>
                      <div className="text-sm font-bold">92%</div>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="flex flex-col gap-4 rounded-none border-l-4 border-blue-500 bg-secondary/50 p-4 lg:flex-row lg:items-center">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-none border-2 border-border bg-blue-100 text-xl">
                      [A]
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold uppercase">API INTEGRATION</p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        Connect third-party services to platform
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">BACKEND</Badge>
                        <Badge variant="outline" className="text-xs">API</Badge>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <div className="mb-1 text-xs uppercase text-muted-foreground">PROGRESS</div>
                      <div className="text-sm font-bold">45%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="rounded-none border-2">
              <CardHeader>
                <CardTitle className="uppercase">ACTIVITY TIMELINE</CardTitle>
                <CardDescription>Your recent contributions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Activity 1 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-none border-2 border-border bg-green-100 text-sm font-bold">
                        [✓]
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold uppercase">COMPLETED TASK: DESIGN MOCKUPS</p>
                      <p className="mb-2 text-xs text-muted-foreground">Website Redesign • 2 hours ago</p>
                      <p className="text-xs">
                        Finished all homepage mockups and shared with the team for feedback.
                      </p>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-none border-2 border-border bg-blue-100 text-sm font-bold">
                        [C]
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold uppercase">COMMENTED ON API ENDPOINT</p>
                      <p className="mb-2 text-xs text-muted-foreground">API Integration • 5 hours ago</p>
                      <p className="text-xs">
                        Suggested improvements to the authentication flow.
                      </p>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-none border-2 border-border bg-purple-100 text-sm font-bold">
                        [P]
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold uppercase">CREATED NEW PROJECT</p>
                      <p className="mb-2 text-xs text-muted-foreground">1 day ago</p>
                      <p className="text-xs">
                        Started the Mobile App project with initial setup and planning.
                      </p>
                    </div>
                  </div>

                  {/* Activity 4 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-none border-2 border-border bg-yellow-100 text-sm font-bold">
                        [+]
                      </div>
                      <div className="w-0.5 flex-1 bg-border" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="mb-1 text-sm font-semibold uppercase">ADDED 5 NEW TASKS</p>
                      <p className="mb-2 text-xs text-muted-foreground">Website Redesign • 2 days ago</p>
                      <p className="text-xs">
                        Created tasks for the next sprint including responsive design work.
                      </p>
                    </div>
                  </div>

                  {/* Activity 5 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-none border-2 border-border bg-orange-100 text-sm font-bold">
                        [A]
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-semibold uppercase">ACHIEVEMENT UNLOCKED: 100 TASKS COMPLETED!</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            {/* Profile Settings */}
            <Card className="rounded-none border-2">
              <CardHeader>
                <CardTitle className="uppercase">PROFILE SETTINGS</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">FIRST NAME</label>
                    <Input defaultValue="Jane" className="rounded-none border-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">LAST NAME</label>
                    <Input defaultValue="Doe" className="rounded-none border-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase">EMAIL</label>
                  <Input type="email" defaultValue="jane.doe@example.com" className="rounded-none border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase">BIO</label>
                  <Textarea
                    defaultValue="Passionate product designer with 5+ years of experience creating user-centered digital experiences."
                    rows={4}
                    className="rounded-none border-2"
                  />
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">WEBSITE</label>
                    <Input defaultValue="janedoe.design" className="rounded-none border-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase">LOCATION</label>
                    <Input defaultValue="San Francisco, CA" className="rounded-none border-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 lg:flex-row lg:justify-between">
                <Button variant="secondary" className="w-full lg:w-auto">CANCEL</Button>
                <Button className="w-full lg:w-auto">SAVE CHANGES</Button>
              </CardFooter>
            </Card>

            {/* Preferences */}
            <Card className="rounded-none border-2">
              <CardHeader>
                <CardTitle className="uppercase">PREFERENCES</CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase">EMAIL NOTIFICATIONS</p>
                    <p className="text-xs text-muted-foreground">Receive updates about your tasks</p>
                  </div>
                  <input type="checkbox" defaultChecked className="size-5 rounded-none border-2 border-border" />
                </div>
                <Separator />
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase">WEEKLY SUMMARY</p>
                    <p className="text-xs text-muted-foreground">Get a weekly report of your activity</p>
                  </div>
                  <input type="checkbox" defaultChecked className="size-5 rounded-none border-2 border-border" />
                </div>
                <Separator />
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase">TASK REMINDERS</p>
                    <p className="text-xs text-muted-foreground">Notifications for upcoming deadlines</p>
                  </div>
                  <input type="checkbox" className="size-5 rounded-none border-2 border-border" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">SAVE PREFERENCES</Button>
              </CardFooter>
            </Card>

            {/* Danger Zone */}
            <Card className="rounded-none border-2 border-destructive">
              <CardHeader>
                <CardTitle className="uppercase text-destructive">DANGER ZONE</CardTitle>
                <CardDescription>Irreversible actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase">DELETE ACCOUNT</p>
                    <p className="text-xs text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">DELETE</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};
