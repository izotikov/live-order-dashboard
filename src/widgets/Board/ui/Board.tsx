import React, { FC, HTMLAttributes } from 'react';
import TaskStore, { ColumnType } from '@entities/Task/model/TaskStore';
import { observer } from 'mobx-react-lite';
import { Flex } from '@shared/ui/Flex';
import { TaskName } from '@widgets/Board';
import { TaskCard } from '@entities/Task';

interface BoardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  taskStatus: ColumnType;
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
            <TaskCard
              key={task.id}
              title={task.name}
              className={taskClassName}
              taskDescription={task.description}
            />
          ))
        )}
      </div>
    </Flex>
  );
});

export default Board;
