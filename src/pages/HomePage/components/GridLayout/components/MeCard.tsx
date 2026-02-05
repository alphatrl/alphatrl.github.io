import cn from 'classnames';
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
      className={cn(className, 'flex-1 justify-between')}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      <img
        src="/images/profile/amos.jpeg"
        alt="Profile Picture"
        className={cn('w-20 h-20 sm:w-24 sm:h-24', 'rounded-full')}
      />
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
