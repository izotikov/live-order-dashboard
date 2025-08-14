import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import TaskStore from '@entities/Task/model/TaskStore';
import { Board } from '@pages/DashBoard';

/**
 * Компонент колонки для выполн6неных задач
 * @param {string} name - Название колонки
 */
const ToDoBoard: FC = observer(({ name }) => {
  const todo = TaskStore.taskTodo();

  return <Board name={name} tasks={todo} />;
});

export default ToDoBoard;
