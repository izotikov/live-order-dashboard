import React from 'react';
import TaskStore from './Task/model/TaskStore';

/**
 * Контекст для доступа к корневым хранилищам приложения.
 * Содержит все MobX-хранилища, которые могут потребоваться компонентам.
 */
const RootStoreContext = React.createContext({
  TaskStore,
});

/**
 * Кастомный хук для удобного доступа к хранилищам.
 * @returns {Object} Объект со всеми хранилищами приложения
 *
 * @example
 * const { TaskStore } = useStores();
 * const tasks = TaskStore.getTasks();
 */
export const useStores = () => React.useContext(RootStoreContext);

/**
 * Провайдер хранилищ. Должен оборачивать корневой компонент приложения.
 * @param {Object} props - Свойства компонента
 * @param {React.ReactNode} props.children - Дочерние компоненты
 *
 * @example
 * <RootStoreProvider>
 *   <App />
 * </RootStoreProvider>
 */
export const RootStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RootStoreContext.Provider value={{ TaskStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};
