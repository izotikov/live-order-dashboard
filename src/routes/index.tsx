import { createFileRoute } from '@tanstack/react-router';
import DashBoard from '@pages/DashBoard/DashBoard';

export const Route = createFileRoute('/')({
  component: DashBoard,
});
