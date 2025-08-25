import { UUID } from 'crypto';
import { AVAILABLE_TAGS } from '@shared/config/constants';

export type TaskStatus = 'open' | 'in_progress' | 'done';
export type TaskPriority = 'very_low' | 'low' | 'medium' | 'high' | 'critical';
export type TaskType = 'bug' | 'feature' | 'task' | 'improvement' | 'research';
export type AvailableTag = (typeof AVAILABLE_TAGS)[number];

export type Task = {
  id: UUID;
  author_id: UUID;
  code: string;
  name: string;
  content: string;
  status: TaskStatus;
  priority: TaskPriority;
  type: TaskType;
  tags: AvailableTag[];
  creation_date: Date;
  comments_count: number;
  notes_count: number;
};
