import { FC } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@shared/shadcn-ui/ui/card';
import * as React from 'react';

export interface BaseCardProps extends React.ComponentProps<'div'> {}

const BaseCard: FC<BaseCardProps> = ({ children, title, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
