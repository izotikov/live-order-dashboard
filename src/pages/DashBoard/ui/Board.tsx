import { FC, HTMLAttributes } from 'react';
import { Flex } from 'antd';
import { TaskCard } from '@widgets/TaskCard';
import { Task } from '@entities/Task/types/task';

interface BoardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  tasks: Task[];
}

const Board: FC<BoardProps> = ({ name, tasks }) => {
  const taskClassName: string = 'bg-primary';

  return (
    <Flex vertical gap='small' className='flex-1'>
      <h2 className='text-xl uppercase m-1'>
        {name} - {tasks.length === 0 ? '' : tasks.length}
      </h2>
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
};

export default Board;
