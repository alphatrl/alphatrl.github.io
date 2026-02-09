import cn from 'classnames';
import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';
import ExpandableButton from './ExpandableButton';

const HuatCard = React.forwardRef<
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
        'p-0!',
        'bg-linear-to-br from-yellow-300 via-amber-400 to-amber-500',
      )}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      <img
        src="/images/project/huat-web-1.png"
        alt="Huat App"
        className={cn(
          'z-1 object-contain drop-shadow-2xl transform-gpu -rotate-30',
          'scale-150 ms-72 mb-0 md:scale-85 md:ms-12 md:-mb-12',
        )}
      />

      <ExpandableButton href="https://huat.amostan.me" label="Huat" />
    </GridCard>
  );
});

HuatCard.displayName = 'HuatCard';

export default HuatCard;
