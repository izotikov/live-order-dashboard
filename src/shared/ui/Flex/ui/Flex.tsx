import React, { FC } from 'react';
import { cn } from '@shared/lib/utils';

interface FlexProps extends React.ComponentProps<'div'> {
  vertical?: boolean;
}

const Flex: FC<FlexProps> = ({ vertical, children, ...props }) => {
  const additionalClassName = props.className;

  return (
    <div
      className={cn(
        'flex',
        vertical ? 'flex-col' : 'flex-row',
        additionalClassName,
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
