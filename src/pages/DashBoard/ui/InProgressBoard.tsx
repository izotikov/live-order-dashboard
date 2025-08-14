import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import TaskStore from '@entities/Task/model/TaskStore';
import { Board } from '@pages/DashBoard';

/**
 * Компонент колонки для задач в работе
 * @param {string} name - Название колонки
 */
const InProgressBoard: FC = observer(({ name }) => {
  const inProgress = TaskStore.taskInProgress();

  return <Board name={name} tasks={inProgress} />;
});

export default InProgressBoard;
