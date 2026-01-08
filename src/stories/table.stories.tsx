import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from './table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Quarterly Sales Report - 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Quarter</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Growth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Q1 2024</TableCell>
          <TableCell>North America</TableCell>
          <TableCell>$1,245,000</TableCell>
          <TableCell>+12.5%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Q1 2024</TableCell>
          <TableCell>Europe</TableCell>
          <TableCell>$987,500</TableCell>
          <TableCell>+8.3%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Q1 2024</TableCell>
          <TableCell>Asia Pacific</TableCell>
          <TableCell>$2,150,000</TableCell>
          <TableCell>+22.1%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Q2 2024</TableCell>
          <TableCell>North America</TableCell>
          <TableCell>$1,389,000</TableCell>
          <TableCell>+11.6%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithSelection: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Employee ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>EMP-001</TableCell>
          <TableCell>Sarah Johnson</TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow data-state="selected">
          <TableCell>EMP-002</TableCell>
          <TableCell>Michael Chen</TableCell>
          <TableCell>Design</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>EMP-003</TableCell>
          <TableCell>Emma Davis</TableCell>
          <TableCell>Marketing</TableCell>
          <TableCell>On Leave</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
