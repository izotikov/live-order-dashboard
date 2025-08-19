import { ReactNode, useEffect } from 'react';
import { initTheme } from '@app/theme/model/themeConfig';
import { useStores } from '@app/store';
import { tasks } from '@shared/api/mocks/apiMock';

let didInit = false;

export function AppProvider({ children }: { children: ReactNode }) {
  const { TaskStore } = useStores();

  useEffect(() => {
    TaskStore.saveTasks(tasks);
    if (!didInit) {
      didInit = true;
      initTheme();
    }
  }, []);

  return <>{children}</>;
}
