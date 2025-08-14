import { ReactNode, useEffect } from 'react';
import { initTheme } from '@features/theme/model/themeConfig';
import { useStores } from '@entities/index';
import task from '../../../apiMock/api';

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
