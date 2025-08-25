import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const tagElemVariants = cva('rounded-4xl py-1 px-2 text-center', {
  variants: {
    fontSize: {
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
      extraLarge: 'text-xl',
    },
    priority: {
      very_low: 'bg-priority-very-low text-priority-very-low-text',
      low: 'bg-priority-low text-priority-low-text',
      medium: 'bg-priority-medium text-priority-medium-text',
      high: 'bg-priority-high text-priority-high-text',
      critical: 'bg-priority-critical text-priority-critical-text',
    },
    type: {
      feature: 'bg-type-feature text-type-feature-text',
      bug: 'bg-type-bug text-type-bug-text',
      task: 'bg-type-task text-type-task-text',
      improvement: 'bg-type-improvement text-type-improvement-text',
      research: 'bg-type-research text-type-research-text',
    },
  },
  defaultVariants: {
    fontSize: 'small',
  } as const,
});

interface TagElemProps extends VariantProps<typeof tagElemVariants> {
  name: string;
}

const TagElem: FC<TagElemProps> = ({ name, fontSize, priority, type }) => {
  return (
    <div className={tagElemVariants({ fontSize, priority, type })}>{name}</div>
  );
};

export default TagElem;
