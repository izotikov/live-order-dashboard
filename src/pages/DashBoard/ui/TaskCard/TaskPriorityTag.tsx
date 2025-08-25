import { FC } from 'react';
import { TaskPriority } from '@entities/Task';
import { TagElem } from '@shared/ui/TagElem';

interface TaskPriorityTagProps {
  variant: TaskPriority;
}

const priorityNameMap: Record<TaskPriority, string> = {
  very_low: 'Очень низкий',
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий',
  critical: 'Критичный',
};

const TaskPriorityTag: FC<TaskPriorityTagProps> = ({ variant }) => {
  return <TagElem priority={variant} name={priorityNameMap[variant]} />;
};

export default TaskPriorityTag;
