import { Card } from 'antd';
import { FC } from 'react';
import { CardProps as AntdCardProps } from 'antd/es/card/Card';

export interface BaseCardProps extends AntdCardProps {}

const BaseCard: FC<BaseCardProps> = ({ children, ...restProps }) => {
  return <Card {...restProps}>{children}</Card>;
};

export default BaseCard;
