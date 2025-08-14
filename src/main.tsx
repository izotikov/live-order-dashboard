import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { AppProvider } from '@app/providers/AppProvider';
import { RootStoreProvider } from '@entities/index';

const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RootStoreProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </RootStoreProvider>
  </StrictMode>,
);
