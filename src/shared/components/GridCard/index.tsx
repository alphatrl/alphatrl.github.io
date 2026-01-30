import React, { forwardRef } from 'react';

interface GridCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

const GridCard = forwardRef<HTMLDivElement, GridCardProps>(
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
        className={`bg-gray-300 rounded-2xl p-6 flex flex-col overflow-hidden relative ${className || ''}`}
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
