import cn from 'classnames';
import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';

const RunningCountdownCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, className, onMouseDown, onMouseUp, onTouchEnd, ...props }, ref) => {
  // Singapore is +8 UTC
  const sgOffset = 8 * 60 * 60 * 1000;
  const now = new Date();
  const sgNow = new Date(
    now.getTime() + now.getTimezoneOffset() * 60000 + sgOffset,
  );

  const todayStart = new Date(
    Date.UTC(sgNow.getFullYear(), sgNow.getMonth(), sgNow.getDate()),
  );

  // April 5, 2026
  const targetStart = new Date(Date.UTC(2026, 3, 5));

  const diffTime = targetStart.getTime() - todayStart.getTime();
  const daysDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const isCompleted = daysDiff < 0;

  return (
    <GridCard
      ref={ref}
      style={style}
      className={cn(
        className,
        'flex flex-col justify-center items-center p-6 text-white',
        'bg-linear-to-b from-indigo-950 via-purple-900 to-orange-500',
      )}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      {isCompleted ? (
        <div className="text-center">
          <span className="text-xl sm:text-2xl font-bold">Run Completed</span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
          <div className="flex flex-col items-center gap-1 sm:gap-2 ">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold">
              {daysDiff}
            </span>
            <span className="text-sm sm:text-base lg:text-lg uppercase tracking-wide text-center">
              Days to go
            </span>
          </div>
          <span className="text-xs lg:base text-gray-100 text-center not-lg:leading-tight">
            2XU Compression Half Marathon
          </span>
        </div>
      )}
    </GridCard>
  );
});

RunningCountdownCard.displayName = 'RunningCountdownCard';

export default RunningCountdownCard;
