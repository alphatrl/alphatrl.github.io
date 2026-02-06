import cn from 'classnames';
import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';
import ExpandableButton from './ExpandableButton';

const PebbleMinimalCard = React.forwardRef<
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
        'bg-radial from-green-300 from-30% to-green-500',
      )}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      <img
        src="/images/project/pebble-minimal.png"
        alt="Taskade Widget"
        className={cn('z-1 w-5/6 h-5/6 object-contain', 'drop-shadow-2xl')}
      />

      <ExpandableButton
        href="https://store-beta.rebble.io/app/56827ebce08e48f8ed0000c6"
        label="Minimal"
      />
    </GridCard>
  );
});

PebbleMinimalCard.displayName = 'PebbleMinimalCard';

export default PebbleMinimalCard;
