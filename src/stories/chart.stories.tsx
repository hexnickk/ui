import type { Meta, StoryObj } from '@storybook/react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from './chart';
import { Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const meta: Meta<typeof ChartContainer> = {
  title: 'UI/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const salesData = [
  { month: 'Jan', revenue: 12500, expenses: 8200 },
  { month: 'Feb', revenue: 15300, expenses: 9100 },
  { month: 'Mar', revenue: 18200, expenses: 10500 },
  { month: 'Apr', revenue: 16700, expenses: 9800 },
  { month: 'May', revenue: 21400, expenses: 11200 },
  { month: 'Jun', revenue: 24100, expenses: 12300 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#171717',
  },
  expenses: {
    label: 'Expenses',
    color: '#737373',
  },
} satisfies ChartConfig;

export const BarChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" />
        <Bar dataKey="expenses" fill="var(--color-expenses)" />
      </BarChart>
    </ChartContainer>
  ),
};

export const LineChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <LineChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
        <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} />
      </LineChart>
    </ChartContainer>
  ),
};

const trafficData = [
  { source: 'Organic', visitors: 4200, color: '#171717' },
  { source: 'Direct', visitors: 3100, color: '#EF4444' },
  { source: 'Referral', visitors: 2400, color: '#22C55E' },
  { source: 'Social', visitors: 1800, color: '#3B82F6' },
  { source: 'Email', visitors: 1200, color: '#F59E0B' },
];

const trafficConfig = {
  visitors: {
    label: 'Visitors',
  },
  Organic: {
    label: 'Organic Search',
    color: '#171717',
  },
  Direct: {
    label: 'Direct Traffic',
    color: '#EF4444',
  },
  Referral: {
    label: 'Referral Links',
    color: '#22C55E',
  },
  Social: {
    label: 'Social Media',
    color: '#3B82F6',
  },
  Email: {
    label: 'Email Campaign',
    color: '#F59E0B',
  },
} satisfies ChartConfig;

export const MultipleSeriesBar: Story = {
  render: () => (
    <ChartContainer config={trafficConfig} className="min-h-[300px] w-full">
      <BarChart data={trafficData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="source" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="visitors" fill="var(--color-Organic)" />
      </BarChart>
    </ChartContainer>
  ),
};
