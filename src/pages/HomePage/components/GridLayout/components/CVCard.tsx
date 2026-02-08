/// <reference types="vite-plugin-svgr/client" />

import cn from 'classnames';
import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';
import DownloadIcon from '../../../../../shared/icons/download.svg?react';

const CVCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, className, onMouseDown, onMouseUp, onTouchEnd, ...props }, ref) => {
  const { VITE_CV_URL } = import.meta.env;

  return (
    <GridCard
      ref={ref}
      style={style}
      className={cn(className, 'relative group cursor-pointer')}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      {/* Default background */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-100 via-indigo-100 to-fuchsia-100" />

      {/* Hover background (fades in) */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-200 via-indigo-200 to-fuchsia-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 ease-in-out" />

      {/* Content wrapper to stay on top */}
      <a
        href={VITE_CV_URL}
        target="_blank"
        referrerPolicy="no-referrer"
        className="relative z-10 w-full h-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <div className="transform group-hover:-translate-y-1 group-focus-within:-translate-y-1 transition-transform duration-300 text-indigo-600">
            <DownloadIcon className="size-8 lg:size-12" />
          </div>

          <div className="font-bold text-slate-800 tracking-wide text-lg lg:text-xl">
            RESUME
          </div>
        </div>
      </a>
    </GridCard>
  );
});

CVCard.displayName = 'CVCard';

export default CVCard;
