import { createRootRoute, Outlet } from '@tanstack/react-router';
import Header from '@widgets/Header/Header';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
});
