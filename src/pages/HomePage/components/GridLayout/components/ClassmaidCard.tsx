import cn from 'classnames';
import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';
import ExpandableButton from './ExpandableButton';

const ClassmaidCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, className, onMouseDown, onMouseUp, onTouchEnd, ...props }, ref) => {
  return (
    <GridCard
      ref={ref}
      style={style}
      className={cn(
        className,
        'justify-center items-center',
        'bg-radial from-blue-400 from-30% to-blue-700',
      )}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      <img
        src="/images/project/classmaid-1.png"
        alt="Taskade Widget"
        className={cn(
          'z-1 object-contain drop-shadow-2xl transform-gpu -rotate-30',
          'scale-200 ms-60 mb-20 md:ms-72 md:mb-28 lg:scale-150 lg:ms-42 xl:ms-80',
        )}
      />

      <ExpandableButton href="https://classmaid.sg" label="Classmaid" />
    </GridCard>
  );
});

ClassmaidCard.displayName = 'ClassmaidCard';

export default ClassmaidCard;
