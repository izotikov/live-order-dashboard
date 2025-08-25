import { FC } from 'react';
import { LazySvg } from '@shared/ui/LazySvg/LazySvg';
import { cn } from '@shared/lib/utils';

interface BaseTagElemProps {
  svgName?: string;
  tagName: string;
  className?: string;
}

const BaseTagElem: FC<BaseTagElemProps> = ({ svgName, tagName, className }) => {
  return (
    <div className={cn('flex rounded-md py-1 px-2 font-normal', className)}>
      {svgName && <LazySvg name={svgName} className='px-1 mt-[1px]' />}
      <span className='text-xs'>{tagName}</span>
    </div>
  );
};

export default BaseTagElem;
