import cn from 'classnames';
import React from 'react';

interface GridCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

const GridCard = React.forwardRef<HTMLDivElement, GridCardProps>(
  (
    {
      style,
      className,
      children,
      title,
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={style}
        className={cn(
          'bg-white dark:bg-gray-600 rounded-4xl flex flex-col overflow-hidden relative',
          'font-normal text-base md:text-lg',
          'p-4 sm:p-8',
          className,
        )}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        {...props}
      >
        {title && <h3 className="text-xl font-medium mb-2">{title}</h3>}
        {children}
      </div>
    );
  },
);

GridCard.displayName = 'GridCard';

export default GridCard;
