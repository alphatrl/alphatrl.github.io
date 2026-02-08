import cn from 'classnames';
import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';
import ExpandableButton from './ExpandableButton';

const TaskadeCard = React.forwardRef<
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
        'bg-radial from-[#ff2d60] from-30% to-[#EB4563]',
      )}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      <img
        src="/images/project/taskade-widget-1.png"
        alt="Taskade Widget"
        className={cn(
          'z-1 w-5/6 h-5/6 object-contain',
          '-rotate-10 ms-12 xl:ms-20',
          'drop-shadow-2xl',
        )}
      />

      <ExpandableButton href="https://taskade.com" label="Taskade" />
    </GridCard>
  );
});

TaskadeCard.displayName = 'TaskadeCard';

export default TaskadeCard;
