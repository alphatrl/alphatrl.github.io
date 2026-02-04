import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';

const MeCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, className, onMouseDown, onMouseUp, onTouchEnd, ...props }, ref) => {
  return (
    <GridCard
      ref={ref}
      style={style}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      <p className="text-gray-600">Full Stack Developer...</p>
    </GridCard>
  );
});

MeCard.displayName = 'MeCard';

export default MeCard;
