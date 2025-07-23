import { createFileRoute } from '@tanstack/react-router';
import UserProfile from '@pages/UserProfile/UserProfile';

export const Route = createFileRoute('/user-profile')({
  component: UserProfile,
});
