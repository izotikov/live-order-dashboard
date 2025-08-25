import React, { FC, HTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import { Flex } from '@shared/ui/Flex';
import { TaskStatus } from '@entities/Task';
import TaskStore from '@entities/Task/model/TaskStore';
import { TaskCard, TaskName } from '@pages/DashBoard';

interface BoardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  taskStatus: TaskStatus;
}

const Board: FC<BoardProps> = observer(({ name, taskStatus }) => {
  const tasks = TaskStore.getTasksByStatus(taskStatus);
  const taskClassName = 'bg-background border-(--color-border)';

  return (
    <Flex vertical className='flex-1 gap-2'>
      <TaskName name={name} tasksLength={tasks.length} />
      <div className='flex flex-col gap-2'>
        {tasks.length === 0 ? (
          <div>Задач пока нет</div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} className={taskClassName} />
          ))
        )}
      </div>
    </Flex>
  );
});

export default Board;
