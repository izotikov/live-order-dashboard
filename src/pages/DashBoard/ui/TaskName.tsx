import React, { FC } from 'react';

interface TaskNameProps {
  name: string;
  tasksLength: number;
}

const TaskName: FC<TaskNameProps> = ({ name, tasksLength }) => {
  return (
    <h2 className='text-xl uppercase m-1'>
      {name} - {tasksLength === 0 ? '' : tasksLength}
    </h2>
  );
};

export default TaskName;
