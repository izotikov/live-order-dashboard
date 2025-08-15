import { ReactNode, useEffect } from 'react';
import task from '@shared/api/mocks/apiMock';
import { initTheme } from '@app/theme/model/themeConfig';
import { useStores } from '@app/store';

let didInit = false;

export function AppProvider({ children }: { children: ReactNode }) {
  const { TaskStore } = useStores();

  useEffect(() => {
    TaskStore.saveTasks(task);
    if (!didInit) {
      didInit = true;
      initTheme();
    }
  }, []);

  return <>{children}</>;
}
