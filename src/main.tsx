import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './main.css';
import {createRouter, RouterProvider} from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import {AppProvider} from "@app/providers/AppProvider";

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
