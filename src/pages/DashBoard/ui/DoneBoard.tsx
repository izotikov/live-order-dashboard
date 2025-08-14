import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import TaskStore from '@entities/Task/model/TaskStore';
import { Board } from '@pages/DashBoard';

/**
 * Компонент колонки для выполненных задач
 * @param {string} name - Название колонки
 */
const DoneBoard: FC = observer(({ name }) => {
  const done = TaskStore.taskDone();

  return <Board name={name} tasks={done} />;
});

export default DoneBoard;
