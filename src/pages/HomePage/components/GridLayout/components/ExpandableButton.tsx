/// <reference types="vite-plugin-svgr/client" />

import cn from 'classnames';

import OutwardArrow from '../../../../../shared/icons/arrow_outward.svg?react';

interface ExpandableButtonProps {
  href: string;
  label: string;
  className?: string;
}

export default function ExpandableButton({
  href,
  label,
  className,
}: ExpandableButtonProps) {
  return (
    <button
      className={cn(
        'group z-2 absolute bottom-4 left-4 bg-white rounded-full transition-all duration-250 hover:scale-105',
        className,
      )}
    >
      <a
        href={href}
        referrerPolicy="no-referrer"
        target="_blank"
        className="flex flex-row items-center gap-0 group-hover:gap-2 transition-all duration-250 py-2 ps-2 pe-2 hover:ps-2.5"
      >
        <span
          className={cn(
            'text-gray-900 text-sm overflow-hidden whitespace-nowrap',
            'transition-all duration-250',
            'opacity-0 group-hover:opacity-100',
            'max-w-0 group-hover:max-w-24',
            'leading-none',
          )}
        >
          {label}
        </span>
        <OutwardArrow className="size-4 transition-all duration-250" />
      </a>
    </button>
  );
}
