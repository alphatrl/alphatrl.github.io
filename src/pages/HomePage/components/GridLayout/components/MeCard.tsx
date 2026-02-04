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
      <p className="text-gray-900">
        Hey! I'm <span className="font-bold">Amos</span>, a software developer
        from Singapore. My goal is simple: To turn complex problems into
        human-centric tools.
      </p>
    </GridCard>
  );
});

MeCard.displayName = 'MeCard';

export default MeCard;
