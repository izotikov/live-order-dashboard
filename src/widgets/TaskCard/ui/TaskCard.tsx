import { FC } from 'react';
import { BaseCard, BaseCardProps } from '@shared/ui/BaseCard';

interface TaskCardProps extends BaseCardProps {
  taskDescription?: string;
}

const TaskCard: FC<TaskCardProps> = ({ taskDescription, ...restProps }) => {
  return <BaseCard {...restProps}>{taskDescription}</BaseCard>;
};

export default TaskCard;
