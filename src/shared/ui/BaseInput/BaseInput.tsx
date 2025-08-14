import { FC } from 'react';
import { Input } from 'antd';
import { InputProps as AntdInputProps } from 'antd/es/input/Input';

interface BaseInputProps extends AntdInputProps {}

const BaseInput: FC<BaseInputProps> = ({ ...restProps }) => {
  return <Input.TextArea {...restProps} />;
};

export default BaseInput;
