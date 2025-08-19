import { UUID } from 'crypto';

export type TaskStatus = 'open' | 'in_progress' | 'done';
export type TaskPriority =
  | 'very low'
  | 'low'
  | 'medium'
  | 'high'
  | 'critical'
  | 'blocker';
export type TaskType = 'bug' | 'feature' | 'task' | 'improvement' | 'research';

export type Task = {
  id: UUID;
  code: string;
  name: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  type: TaskType;
  creation_date: Date;
  comments_count?: number;
  notes_count?: number;
};
