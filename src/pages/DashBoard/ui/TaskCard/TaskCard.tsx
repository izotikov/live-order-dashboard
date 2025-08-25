import { FC } from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shared/shadcn-ui/ui/card/card';
import { TaskPriorityTag, TaskTypeTag } from '@pages/DashBoard';
import { Task } from '@entities/Task';
import { HorizontalList } from '@shared/ui/HorizontalList';

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task, ...props }) => {
  const {
    author_id,
    name,
    code,
    content,
    priority,
    type,
    tags,
    creation_date,
    comments_count,
    notes_count,
  } = task;
  return (
    <Card className='rounded-md border-neutral-dark bg-background'>
      <CardHeader>
        <CardDescription>#{code}</CardDescription>
        <CardTitle>{name}</CardTitle>
        <CardAction className='flex gap-2'>
          <TaskTypeTag variant={type} />
          <TaskPriorityTag variant={priority} />
        </CardAction>
      </CardHeader>
      <CardContent className='font-light'>
        <p>{content}</p>
        <HorizontalList
          arrayOfElems={tags}
          svgTagName='tagLabel'
          listContainerClassName='gap-1 mt-2'
          tagClassName='bg-neutral-light'
        />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default TaskCard;
