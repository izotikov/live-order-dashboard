import { FC } from 'react';
import { TagElem } from '@shared/ui/TagElem';
import { TaskType } from '@entities/Task';

interface TaskTypeTagProps {
  variant: TaskType;
}

const typeNameMap = {
  feature: 'Фича',
  bug: 'Баг',
  task: 'Задача',
  improvement: 'Улучшение',
  research: 'Исследование',
};

const TaskTypeTag: FC<TaskTypeTagProps> = ({ variant }) => {
  return <TagElem type={variant} name={typeNameMap[variant]}></TagElem>;
};

export default TaskTypeTag;
