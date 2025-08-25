import { FC } from 'react';
import { cn } from '@shared/lib/utils';
import { BaseTagElem } from '@shared/ui/BaseTagElem';

interface HorizontalListProps {
  listContainerClassName?: string;
  tagClassName?: string;
  svgTagName?: string;
  arrayOfElems: any[];
}

const HorizontalList: FC<HorizontalListProps> = ({
  listContainerClassName,
  arrayOfElems,
  svgTagName,
  tagClassName,
}) => {
  return (
    <ul className={cn('flex flex-wrap', listContainerClassName)}>
      {arrayOfElems.map((elem) => (
        <BaseTagElem
          key={elem}
          svgName={svgTagName ?? ''}
          tagName={elem}
          className={tagClassName ?? ''}
        />
      ))}
    </ul>
  );
};

export default HorizontalList;
