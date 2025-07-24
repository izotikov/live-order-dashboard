import { ReactNode, useEffect } from 'react';
import { initTheme } from '@features/theme/themeConfig';

let didInit = false;

export function AppProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      initTheme();
    }
  }, []);

  return <>{children}</>;
}
