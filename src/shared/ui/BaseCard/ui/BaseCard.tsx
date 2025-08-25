import { FC, ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shared/shadcn-ui/ui/card/card';

export interface BaseCardProps {
  className?: string;
  title?: string;
  description?: string;
  headerExtra?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const BaseCard: FC<BaseCardProps> = ({
  title,
  description,
  headerExtra,
  content,
  footer,
  children,
  className,
  ...props
}) => {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        {description && <CardDescription>{description}</CardDescription>}
        {title && <CardTitle>{title}</CardTitle>}
        {headerExtra}
      </CardHeader>
      <CardContent>{content || children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default BaseCard;
