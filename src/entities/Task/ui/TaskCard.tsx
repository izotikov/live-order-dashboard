import { FC } from 'react';
import { BaseCard, BaseCardProps } from '@shared/ui/BaseCard';

interface TaskCardProps extends BaseCardProps {
  taskDescription?: string;
}

const TaskCard: FC<TaskCardProps> = ({ taskDescription, title, ...props }) => {
  return (
    <BaseCard title={title} {...props}>
      {taskDescription}
    </BaseCard>
  );
};

export default TaskCard;
